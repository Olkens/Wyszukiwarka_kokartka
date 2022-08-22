<template>
  <div>
    {{ workoutDesc }}
    <button @click="fetchDesc"></button>
  </div>
</template>

<script>

export default {
  props: ['workoutDesc'],
  data() {
    return {
      apiDesc: [],
      descURL: "https://kokartka.stronazen.pl" + this.url,
      url: "",
    };
  },
  methods: {
    fetchDesc() {
      fetch(this.descURL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.apiDesc.push({
            description: data.description,
          });
        });
      console.log("https://kokartka.stronazen.pl" + this.url);
      console.log(this.apiDesc);
    }
  },
};
</script>

<style>
</style>