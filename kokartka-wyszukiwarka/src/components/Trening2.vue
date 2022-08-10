<template>
  <div class="app-tr-container">
    <div class="box-cont">
      <div class="box flex-label">
        <!-- <label for="group">GRUPA</label> -->
        <select name="grupa" id="group" v-model="this.fGroup">
          <option value="Grupa" disabled selected hidden>Grupa</option>
          <option value="mucha">mucha</option>
          <option value="kokartka">kokartka</option>
        </select>
      </div>
      <div class="box flex-label">
        <!-- <label for="level">LEVEL</label> -->
        <select name="level" id="level" v-model="this.fLevel">
          <option value="Poziom" disabled selected hidden>Poziom</option>
          <option value="beginner">Podstawowy</option>
          <option value="advanced">zaawansowany</option>
        </select>
      </div>
      <div class="box flex-label">
        <label for="age">WIEK</label>
        <select name="age" id="age" v-model="this.fAge">
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
      </div>
      <div class="box flex-label">
        <label for="day">DZIEŃ</label>
        <select name="day" id="day" v-model="this.fDay">
          <option value="poniedziałek">Poniedziałek</option>
          <option value="wtorek">Wtorek</option>
          <option value="środa">Środa</option>
          <option value="czwartek">Czwartek</option>
          <option value="piątek">Piątek</option>
          <option value="sobota">Sobota</option>
          <option value="niedziela">Niedziela</option>
        </select>
      </div>
      <div class="box flex-label">
        <p>WIEK</p>
      </div>
      <div class="box flex-label">SZKOŁA</div>

      <div class="box flex-label">GODZINA</div>
      <button @click="filterTable()">Filtruj</button>
      <button @click="reset()">Reset</button>
    </div>
    <!-- <button @click="log()" style="width: 100px; height: 100px">f</button>
    <button @click="reset()" style="width: 100px; height: 100px">r</button> -->
    <div v-for="(trening, index) in trenings" :key="trening.id"
      :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }">
      <Workout :trening="trening" />
    </div>


  </div>
</template>

<script>
// import { thisTypeAnnotation } from "@babel/types";

// import Heading from "./Heading.vue";
import Workout from "./Workout.vue";
export default {
  props: ['trening'],
  data() {
    return {
      fLevel: "Poziom",
      fAge: "",
      fGroup: "Grupa",
      fDay: "",
      trenings: [],
      filteredTrenings: [],
      proxyTable: [],
      isFiltered: false,
    };
  },
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
            date: new Date(data[i].dates[0]).getHours() +
              ":" +
              String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
            age: data[i].age.min,
            day: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
          });
        }
        this.proxyTable = apiResults;
        this.trenings = this.proxyTable;
      });
  },
  computed: {},
  methods: {
    reset() {
      this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      this.fLevel = "";
      this.fGroup = "";
    },
    // setFilters() {
    //   this.emitter.on("filterProps", (e) => {
    //     (this.filteredLevel = e.filterLevel),
    //       (this.filteredGroup = e.filterGroup),
    //       (this.filteredDay = e.filterDay);
    //     if (e.filterLevel == "podstawowy") {
    //       this.filteredLevel = "beginner";
    //     } else if (e.filterLevel == "zaawansowany") {
    //       this.filteredLevel = "advanced";
    //     }
    //     console.log(
    //       this.filteredLevel + " " + this.filteredGroup + " " + this.filteredDay
    //     );
    //   });
    // },
    filterTable() {

      this.filteredTrenings = [];
      this.trenings = this.proxyTable;

      this.trenings.filter((trening) => {
        if (trening.level == this.fLevel && trening.day == this.fDay) {
          this.filteredTrenings.push(trening);
        }
        // console.log(trening);
        // if (this.filteredLevel != "") {
        // if (trening.level == this.fLevel && trening.day == this.fDay) {
        //   this.filteredTrenings.push(trening);
        // }
        // }
        // if (this.filteredGroup != "") {
        //   if (trening.group == this.filteredGroup) {
        //     this.filteredTrenings.push(trening);
        //   }
        // }
        // if (this.filteredDay != "") {
        //   if (trening.day == this.filteredGroup) {
        //     this.filteredTrenings.push(trening);
        //   }
        // }
      });
      this.trenings = this.filteredTrenings;
      console.log(this.filteredTrenings);

    },
    log() {
      console.log(this.fDay + " " + this.fLevel);
    },
  },
  components: { Workout }
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

/* select option:first-child {
  color: red;
} */
</style>