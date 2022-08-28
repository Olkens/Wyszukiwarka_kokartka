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
          <option value="SP 42 KARWINY">SP 42 KARWINY</option>
          <option value="SP 34 REDŁOWO">SP 34 REDŁOWO</option>
          <option value="SP 20 WIELKI KACK">SP 20 WIELKI KACK</option>
          <option value="SP 45 DĄBROWA">SP 45 DĄBROWA</option>
          <option value="SP 18 CENTRUM">SP 18 CENTRUM</option>
          <option value="BOJANO">BOJANO</option>
          <option value="CHWASZCZYNO">CHWASZCZYNO</option>
          <option value="SP 23 WZGÓRZE">SP 23 WZGÓRZE</option>
          <option value="SP 11 ORŁOWO">SP 11 ORŁOWO</option>
          <option value="SP 48 CHWARZNO">SP 48 CHWARZNO</option>
          <option value="SP 12 WITOMINO">SP 12 WITOMINO</option>
          <option value="SP 47 DĄBROWA">SP 47 DĄBROWA</option>
          <option value="SP 46 KARWINY">SP 46 KARWINY</option>
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
      <button class="reset-btn" @click="reset()">Wyczyść filtr</button>
    </div>
    <button @click="log()" style="width: 100px; height: 100px">f</button>
    <!-- <button @click="reset()" style="width: 100px; height: 100px">r</button> -->
    <div class="trenings-collapse">
      <!-- <div>{{ trening2 }}</div> -->
      <div v-for="(trening, index) in filterWorkouts" :key="trening.id">
        <Workout :trening="trening" :treningsDesc="treningsDesc"
          :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }" />
      </div>
    </div>
    <!-- <div v-else-if="filterWorkouts.length == 0">
      <div class="no-results-card">
        <p>Niestety, nie prowadzimy aktualnie takich zajęć</p>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { thisTypeAnnotation } from "@babel/types";

// import Heading from "./Heading.vue";
import Workout from "./Workout.vue";
import WorkoutDesc from "../views/WorkoutDesc.vue";
import axios from "axios";
export default {
  props: ["trening", "trening2"],
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
    };
  },
  created() {
    const apitab = [];
    axios
      .get("https://kokartka.stronazen.pl/zapisy/api/workouts")
      .then(function (response) {
        const data = response.data;
        for (let i = 0; i < response.data.length; i++) {
          axios.get("https://kokartka.stronazen.pl/zapisy/api/workouts/" + data[i].id).then(res => {
            console.log(res.data)
          })
          apitab.push({
            id: data[i].id,
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
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        this.trenings = apitab;
        this.proxyTable = apitab;
      });

    // this.trenings = this.trening2;
    // this.proxyTable = this.trening2;
    // this.trenings = this.proxyTable;
    // fetch(this.url)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     const apiResults = [];
    //     const apiDesc = [];
    //     for (let i = 0; i < data.length; i++) {
    //       apiResults.push({
    //         id: i,
    //         apiId: data[i].id,
    //         level: data[i].level,
    //         date:
    //           new Date(data[i].dates[0]).getHours() +
    //           ":" +
    //           String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
    //         age: String(data[i].age.min) + "-" + String(data[i].age.max),
    //         day: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
    //           weekday: "long",
    //         }),
    //         location: data[i].location,
    //         group: data[i].group,
    //         signUp: data[i].links.registration,
    //         desc: data[i].links.self,
    //         // "https://kokartka.stronazen.pl" + data[i].links.self,
    //         descObj: fetch("https://kokartka.stronazen.pl" + data[i].links.self)
    //           .then((response) => {
    //             if (response.ok) {
    //               return response.json();
    //             }
    //           })
    //           .then((data) => {
    //             apiDesc.push({
    //               id: i,
    //               desc: data.description,
    //             });
    //           }),
    //       });
    //     }
    // this.treningsDesc = apiDesc;
    // this.proxyTable = apiResults;
    //   });
    console.log(this.trening2);
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
      // for (let i = 0; i < this.trenings.length; i++) {
      //   console.log(this.trenings[i].location);
      // }
      console.log(this.proxyTable);
      console.log(this.trenings);
      console.log(this.trening2);
    },
    reset() {
      // this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      this.fLevel = "Poziom";
      this.fGroup = "Grupa";
      this.fAge = "Wiek";
      this.fDay = "Dzień";
      this.fSzkola = "Szkoła";
    },
  },
  components: { Workout, WorkoutDesc },
};
</script>

<style>
.box-cont {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 5px;
}

.flex-label {
  display: flex;
  flex-direction: column;
}

select {
  font-family: brandon-grotesque-black, sans-serif;
  width: 145px;
  height: 37px;
  background: #2e3a59;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  text-align: center;
  border: 1px solid #3f4a6a;
  line-height: 10px;
  padding: 5px 0;
  font-weight: bold;
  text-align: center;
}

.reset-btn {
  max-width: 169px;
  width: 169px;
  max-height: 37px;
  height: 37px;
  color: #000;
  font-size: 13px;
  background: #fff;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  text-transform: uppercase;
}

.trenings-collapse {
  height: 728px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-content: flex-start;
}

.no-results-card {
  width: 1130px;
  height: 230px;
  border-radius: 25px;
  background: #2c303d;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-results-card p {
  font-size: 26px;
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .trenings-collapse {
    justify-content: center;
  }

  .box-cont {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>