<template>
  <div class="app-tr-container">

    <div class="box-cont">
      <div class="box flex-label">
        <!-- <label for="group">GRUPA</label> -->
        <select name="grupa" id="group" v-model="this.fGroup">
          <option value="Grupa" disabled selected hidden>Grupa</option>
          <option v-for="grupa in uniqueGroup"> {{ grupa.group }}</option>
        </select>
      </div>
      <div class="box flex-label">
        <!-- <label for="level">LEVEL</label> -->
        <select name="level" id="level" v-model="this.fLevel">
          <option value="Poziom" disabled selected hidden>Poziom</option>
          <option value="beginner">Podstawowy</option>
          <option value="advanced">Zaawansowany</option>
          <option value="beginner_older">Starsza podstawowa</option>
        </select>
      </div>
      <div class="box flex-label">
        <!-- <label for="age">WIEK</label> -->
        <select name="age" id="age" v-model="this.fAge">
          <option value="Wiek" disabled selected hidden>Wiek</option>
          <option v-for="wiek in uniqueAge"> {{ wiek.age }}</option>
          <!-- <option value="4">4</option>
          <option value="15">15</option> -->
        </select>
      </div>
      <div class="box flex-label">
        <select name="szkola" id="szkola" v-model="this.fSzkola">
          <option value="Szkoła" disabled selected hidden>Szkoła</option>
          <option v-for="szkola in uniqueLocation" :value="szkola.location"> {{ szkola.location }}</option>
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
          <!-- <option :value={ trening.date } v-for="trening in this.uniqueDates">{{ trening.date }}</option> -->
          <option value="9">9:00 - 10:00</option>
          <option value="10">10:0 - 11:00</option>
          <option value="11">11:00 - 12:00</option>
          <option value="12">12:00 - 13:00</option>
          <option value="13">13:00 - 14:00</option>
          <option value="14">14:00 - 15:00</option>
          <option value="15">15:00 - 16:00</option>
          <option value="16">16:00 - 17:00</option>
          <option value="17">17:00 - 18:00</option>
          <option value="18">18:00 - 19:00</option>
          <option value="19">19:00 - 20:00</option>
          <option value="20">20:00 - 21:00</option>

        </select>
      </div>
      <!-- <button @click="log()">Filtruj</button> -->
      <button class="reset-btn" @click="reset()">Wyczyść filtr</button>
    </div>
    <!-- <button @click="log()" style="width: 100px; height: 100px">f</button> -->
    <!-- <button @click="reset()" style="width: 100px; height: 100px">r</button> -->
    <div class="trenings-collapse">
      <!-- <div>{{ trening2 }}</div> -->
      <div v-for="(trening, index) in filterWorkouts" :key="trening.id" v-if="filterWorkouts.length > 0">
        <Workout :trening="trening" :treningsDesc="treningsDesc"
          :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }" />
      </div>

      <div v-else-if="filterWorkouts.length == 0">
        <div class="no-results-card">
          <p>Niestety, nie prowadzimy aktualnie takich zajęć</p>
        </div>
      </div>
    </div>
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
      uniqueDates: [],
      url: "https://kokartka.stronazen.pl/zapisy/api/workouts",
    };
  },
  created() {
    const apitab = [];
    axios
      .get("https://kokartka.info/zapisy/api/workouts")
      .then(function (response) {
        const data = response.data;
        for (let i = 0; i < response.data.length; i++) {
          // axios.get("https://kokartka.info/zapisy/api/workouts" + data[i].id).then(res => {
          //   console.log(res.data)
          // })
          apitab.push({
            id: data[i].id,
            level: data[i].level,
            hour: new Date(data[i].dates[0]).getHours(),
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
  },
  computed: {
    filterWorkouts() {
      return this.trenings.filter(
        (trening) =>
          (this.fLevel == "Poziom" || trening.level.includes(this.fLevel)) &&
          (this.fDay == "Dzień" || trening.day.includes(this.fDay)) &&
          (this.fAge == "Wiek" || trening.age.toLowerCase().includes(this.fAge.toLowerCase())) &&
          (this.fSzkola == "Szkoła" ||
            trening.location
              .toLowerCase()
              .includes(this.fSzkola.toLowerCase())) &&
          (this.fGroup == "Grupa" || trening.group.includes(this.fGroup)) &&
          (this.fHour == "Godzina" || trening.hour == this.fHour)
      );
    },
    uniqueDates() {
      this.uniqueDates = this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.date]: current
        });
      }, {});
    },
    uniqueLocation() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.location]: current
        });
      }, {});
    },
    uniqueAge() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.age]: current
        });
      }, {});
    },
    uniqueGroup() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.group]: current
        });
      }, {});
    },
    uniqueLevel() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.level]: current
        });
      }, {});
    },
    sortedArray() {
      let sortedDates = uniqueDates;

      sortedDates = uniqueDates.sort((a, b) => {
        let fa = a.date, fb = b.date;
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    log() {
      // for (let i = 0; i < this.trenings.length; i++) {
      //   console.log(this.trenings[i].location);
      // }
      console.log(this.uniqueLocation)
      console.log(this.uniqueDates)
    },
    reset() {
      // this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      this.fLevel = "Poziom";
      this.fGroup = "Grupa";
      this.fAge = "Wiek";
      this.fDay = "Dzień";
      this.fSzkola = "Szkoła";
      this.fHour = "Godzina"
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
  width: 1030px;
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