<template>
  <div class="app-tr-container">
    <div class="box-cont">
      <div class="box flex-label">
        <!-- <label for="group">GRUPA</label> -->
        <select name="grupa" id="group" v-model="this.fGroup">
          <option value="Grupa" disabled selected hidden>Grupa</option>
          <option value="kokartka">Kokartka</option>
          <option value="mucha">Mucha</option>

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
        <!-- <label for="age">WIEK</label> -->
        <select name="age" id="age" v-model="this.fAge">
          <option value="Wiek" disabled selected hidden>Wiek</option>
          <option value="4">4</option>
          <option value="15">15</option>
        </select>
      </div>
      <div class="box flex-label">
        <select name="szkola" id="szkola" v-model="this.fSzkola">
          <option value="Szkoła" disabled selected hidden>Szkoła</option>
          <option value="SP 26 DZIAŁKI LEŚNE">SP 26 DZIAŁKI LEŚNE</option>
          <option value="SP 8 ORŁOWO">SP 8 ORŁOWO</option>
          <option value="SP 37 WICZLINO">SP 37 WICZLINO</option>
        </select>
      </div>
      <div class="box flex-label">
        <!-- <label for="day">DZIEŃ</label> -->
        <select name="day" id="day" v-model="this.fDay">
          <option value="Dzień" disabled selected hidden>Dzień</option>
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
        <!-- <label for="day">DZIEŃ</label> -->
        <select name="hour" id="hour" v-model="this.fHour">
          <option value="Godzina" disabled selected hidden>GODZINA</option>
          <option value="18:00">18:00</option>
        </select>
      </div>
      <!-- <button @click="log()">Filtruj</button> -->
      <button class="reset-btn" @click="reset()">Reset</button>
    </div>
    <!-- <button @click="log()" style="width: 100px; height: 100px">f</button>
    <button @click="reset()" style="width: 100px; height: 100px">r</button> -->
    <div class="trenings-collapse">
      <div v-for="(trening, index) in filterWorkouts" :key="trening.id">
        <Workout :trening="trening" :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }" />
      </div>
    </div>
  </div>
</template>

<script>
// import { thisTypeAnnotation } from "@babel/types";

// import Heading from "./Heading.vue";
import Workout from "./Workout.vue";
export default {
  props: ["trening", "treningsDesc"],
  data() {
    return {
      fLevel: "Poziom",
      fAge: "Wiek",
      fGroup: "Grupa",
      fDay: "Dzień",
      fSzkola: "Szkoła",
      fHour: "Godzina",
      trenings: [],
      filteredTrenings: [],
      treningsDesc: [],
      proxyTable: [],
      isFiltered: false,
      url: "https://kokartka.stronazen.pl/zapisy/api/workouts",
      descUrl: "https://kokartka.stronazen.pl`${trenings.descObj}`",
    };
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
            apiId: data[i].id,
            level: data[i].level,
            date:
              new Date(data[i].dates[0]).getHours() +
              ":" +
              String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
            age: String(data[i].age.min) + "-" + String(data[i].age.max),
            day: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
            location: data[i].location,
            group: data[i].group,
            signUp: data[i].links.registration,
            desc: data[i].links.self,
            // "https://kokartka.stronazen.pl" + data[i].links.self,
            descObj: fetch("https://kokartka.stronazen.pl" + data[i].links.self).then((response) => {
              if (response.ok) {
                return response.json();
              }
            }).then((data) => {
              apiDesc.push({
                id: i,
                desc: data.description,
              })
            })

          });
        }
        this.treningsDesc = apiDesc;
        this.proxyTable = apiResults;
        this.trenings = this.proxyTable;
      });
  },
  computed: {
    filterWorkouts() {
      return this.trenings.filter(
        (trening) =>
          (this.fLevel == "Poziom" || trening.level.includes(this.fLevel)) &&
          (this.fDay == "Dzień" || trening.day.includes(this.fDay)) &&
          (this.fAge == "Wiek" || trening.age.includes(this.fAge)) &&
          (this.fSzkola == "Szkoła" ||
            trening.location
              .toLowerCase()
              .includes(this.fSzkola.toLowerCase())) &&
          (this.fGroup == "Grupa" || trening.group.includes(this.fGroup))
      );
    },
  },
  methods: {
    log() {
      console.log(this.fSzkola);
      console.log(this.trenings);
      console.log(this.descObj);
      console.log(this.treningsDesc)
    },
    reset() {
      this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      this.fLevel = "Poziom";
      this.fGroup = "Grupa";
      this.fAge = "Wiek";
      this.fDay = "Dzień";
      this.fSzkola = "Szkoła";
    },
    filterTable() {
      this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      S
      this.trenings.filter((trening) => {
        if (this.fLevel != "Poziom") {
          if (trening.level.includes(this.fLevel)) {
            this.filteredTrenings.push(trening);
          }
        }
      });
      if (this.filteredTrenings.length != 0) {
        this.trenings = this.filteredTrenings;
      }
      console.log(this.filteredTrenings);
    },
  },
  components: { Workout },
};
</script>

<style>
/* select option:first-child {
  color: red;
} */

/* .box {
  width: 150px;
  height: 50px;
  background: #2e3a59;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
} */

.box-cont {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 25px;
}

.flex-label {
  display: flex;
  flex-direction: column;
}

select {
  width: 140px;
  height: 37px;
  background: #2e3a59;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  text-align: center;
}

option {
  padding: 5px;
}

.reset-btn {
  max-width: 169px;
  width: 169px;
  max-height: 37px;
  height: 37px;
}

.trenings-collapse {
  height: 728px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9px;
  align-content: flex-start;
}
</style>