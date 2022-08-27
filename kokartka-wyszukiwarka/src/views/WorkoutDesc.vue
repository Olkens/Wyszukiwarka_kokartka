<template>
  <div>
    <p v-html="showDesc"></p>

    <button @click="fetchDesc()"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treningDesc: [],
      url: "https://kokartka.stronazen.pl/zapisy/api/workouts",
      descId: "",
      apiDesc: [],
      showDesc: "",
    };
  },
  methods: {
    log() {
      console.log(this.treningDesc);
      console.log(this.descId);
      console.log(
        "https://kokartka.stronazen.pl" + this.treningDesc[this.descId].desc
      );
    },
    fetchDesc() {
      fetch(
        "https://kokartka.stronazen.pl" + this.treningDesc[this.descId].desc
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.showDesc = data.description;
        });
      console.log(this.showDesc);
    },
  },
  created() {
    fetch(this.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const apiResults = [];
        const apiDesc = [];
        for (let i = 0; i < data.length; i++) {
          apiResults.push({
            id: i,
            desc: data[i].links.self,
          });
        }
        this.treningDesc = apiResults;
      });
    this.descId = this.$route.params.id;
  },
};
</script>

<style>
</style>