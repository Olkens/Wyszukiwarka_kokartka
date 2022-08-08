<template>
  <div class="app-tr-container">
    <!-- <Heading></Heading> -->
    <button @click="filterTable" style="width: 100px; height: 100px"></button>
    <div
      class="tr-main-container"
      v-for="(trening, index) in trenings"
      :key="trening.id"
      :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }"
    >
      <div class="tr-info-box-1">
        <div class="tr-info-1">
          <div class="tr-info-1-box">
            <div>
              <p class="faded-title">POZIOM</p>
              <p v-if="trening.level === 'beginner'">Podstawowy</p>
              <p v-else-if="trening.level === 'beginner_older'">
                początkująca starsza
              </p>
              <p v-if="trening.level === 'advanced'">zaawansowany</p>
            </div>
            <div>
              <p class="faded-title">Szkoła</p>
              <p>{{ trening.szkola }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-info-box-2 tr-info-box-2-grid">
        <div class="tr-info-2">
          <div class="tr-info-2-box tr-border-left">
            <div>
              <p class="faded-title">Wiek</p>
              <p>{{ trening.age }}</p>
            </div>
            <div>
              <p class="faded-title">Dzień</p>
              <p>{{ trening.day }}</p>
            </div>
          </div>
        </div>
        <div class="tr-info-3">
          <div class="tr-info-3-box tr-border-left">
            <div>
              <p class="faded-title">Godzina</p>
              <p>
                {{ trening.date }}
              </p>
            </div>
            <div>
              <p class="faded-title">GRUPA</p>
              <p>KOKARTKA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-btn-container">
        <a class="tr-btn tr-btn-wi" href="#">Więcej Informacji</a>
        <a class="tr-btn tr-btn-zs" href="#"> Zapisz się</a>
      </div>
    </div>
  </div>
</template>

<script>
// import { thisTypeAnnotation } from "@babel/types";

// import Heading from "./Heading.vue";
export default {
  data() {
    return {
      props: {
        level: "",
        grupa: "",
      },
      trenings: [],
      filteredTrenings: [],
      filters: {
        filteredLevel: "",
        filteredGroup: "",
      },
    };
  },
  computed: {},
  created() {
    fetch("https://kokartka.stronazen.pl/zapisy/api/workouts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const apiResults = [];
        for (let i = 0; i < data.length; i++) {
          apiResults.push({
            id: i,
            level: data[i].level,
            date:
              new Date(data[i].dates[0]).getHours() +
              ":" +
              String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
            age: data[i].age.min,
            day: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
          });
        }

        // console.log(level.value);
        this.emitter.on("filterProps", (e) => {
          this.filters.push({ filtereG: filterGroup });
          console.log(this.filters.filterG);
        });
        let filtered = apiResults.filter((result) => {
          return result.level == "podstawowy";
        });
        this.trenings = apiResults;
      });
  },
  computed: {
    // filterTable(level) {
    //   console.log(this.trenigns);
    //   this.trenigns.filter((trening) => {
    //     return trening.level == this.filterLevel;
    //   });
    // },
  },
};
</script>

<style>
.tr-main-container {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: repeat(2, 0fr);
  max-width: 348px;
  min-width: 340px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 10px;
  height: 137px;
  background-color: #1a1d27;
  text-transform: uppercase;
}

.trMainContainerSecondBgcolor0 {
  background-color: #2c303d !important;
}

.trMainContainerSecondBgcolor {
  background-color: #1a1d27;
}

.tr-info-box-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.tr-info-1-box,
.tr-info-2-box,
.tr-info-3-box {
  display: flex;
  gap: 5px;
  flex-direction: column;
}

.tr-info-box-2 {
  grid-area: 1 / 2 / 2 / 3;
}

.tr-border-left {
  border-left: 1px solid gray;
  padding-left: 15px;
  padding-right: 5px;
}

.tr-btn-container {
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
}

.tr-info-box-2-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.tr-info-2 {
  grid-area: 1 / 1 / 2 / 2;
}

.tr-info-3 {
  grid-area: 1 / 2 / 2 / 3;
}

.tr-btn {
  width: 146px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: bold;
  padding: 2px;
}

.tr-btn-wi {
  color: #fff;
}

.tr-btn-zs {
  background: #fff;
  color: #000;
}

.faded-title {
  color: #616a89;
}
</style>