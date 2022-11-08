<template>
  <div class="app-tr-container">
    <div class="box-cont">
      <div class="box flex-label">
        <!-- <label for="group">GRUPA</label> -->
        <select name="grupa" id="group" v-model="this.fGroup">
          <option value="">Grupa</option>
          <option value="Grupa" disabled selected hidden>Grupa</option>
          <option v-for="grupa in avalibleGroups" :value="grupa" :key="grupa.id">
            {{ grupa }}
          </option>
          <option value="DORO">DOROŚLI</option>
        </select>
      </div>

      <div class="box flex-label">
        <!-- <label for="level">LEVEL</label> -->
        <select name="level" id="level" v-model="this.fLevel">
          <option value="">Poziom</option>
          <option value="Poziom" disabled selected hidden>Poziom</option>
          <option value="beginner">Podstawowy</option>
          <option value="advanced">Zaawansowany</option>
          <option value="beginner_older">Starsza podstawowa</option>
        </select>
      </div>

      <div class="box flex-label">
        <!-- <label for="age">WIEK</label> -->
        <select name="age" id="age" v-model="this.fAge">
          <option value="Wiek">Wiek</option>
          <option value="Wiek" disabled selected hidden>Wiek</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17+</option>
        </select>
      </div>

      <div class="box flex-label">
        <select name="city" id="city" v-model="this.fCity">
          <option value="Miasto">Miasto</option>
          <option value="Miasto" disabled selected hidden>Miasto</option>
          <option v-for="city in uniqueCity" :value="city" :key="city.id">
            {{ city }}
          </option>
        </select>
      </div>

      <div class="box flex-label">
        <select name="szkola" id="szkola" v-model="this.fSzkola">
          <option value="">Szkoła</option>
          <option value="Szkoła" disabled selected hidden>Szkoła</option>
          <option
            v-for="szkola in uniqueLocation"
            :value="szkola"
            :key="szkola.id"
          >
            {{ szkola }}
          </option>
        </select>
      </div>

      <div class="box flex-label">
        <!-- <label for="day">DZIEŃ</label> -->
        <select name="day" id="day" v-model="this.fDay">
          <option value="">Dzień</option>
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
          <option value="Godzina">Godzina</option>
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
      <button class="reset-btn" @click="reset()">
        <font-awesome-icon icon="fa-solid fa-x" />
      </button>
      <!-- <button class="reset-btn" @click="log()">log</button> -->
    </div>
    <div class="trenings-section">
      <div v-if="filterWorkouts.length > 0">
        <div class="trenings-collapse">
          <div v-for="(trening, index) in filterWorkouts" :key="trening.id">
            <Workout
              :trening="trening"
              :treningsDesc="treningsDesc"
              :class="{ trMainContainerSecondBgcolor0: index % 2 == 0 }"
            />
          </div>
        </div>
      </div>
      <div v-else class="no-results-card">
        <div class="no-results-card-container">
          <p>Niestety, nie prowadzimy aktualnie takich zajęć</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      fCity: "Miasto",
      trenings: [],
      filteredTrenings: [],
      treningsDesc: [],
      proxyTable: [],
      avalibleGroups: [
        "PRZEDSZKOLAKI",
        "ZERÓWKA",
        "LAWENDOWA",
        "RÓŻOWA",
        "FIOLETOWA",
        "NIEBIESKA",
        "GRANATOWA",
        "KADRA",
        "BOBASY",
      ],
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
          apitab.push({
            id: data[i].id,
            level: data[i].level,
            hour: new Date(data[i].dates[0]).getHours(),
            date:
              new Date(data[i].dates[0]).getHours() +
              ":" +
              String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
            age: String(data[i].age.min) + "-" + String(data[i].age.max),
            filterAgeMin: data[i].age.min,
            filterAgeMax: data[i].age.max,
            day: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
            location: data[i].location,
            city: data[i].location_address.city,
            brand: data[i].brand,
            group: data[i].group,
            signUp: data[i].links.registration,
          });
        }
      })
      .catch(function (error) {
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
          (this.fAge == "Wiek" ||
            (trening.filterAgeMin < parseInt(this.fAge) &&
              trening.filterAgeMax > parseInt(this.fAge))) &&
          (this.fSzkola == "Szkoła" ||
            trening.location
              .toLowerCase()
              .includes(this.fSzkola.toLowerCase())) &&
          (this.fCity == "Miasto" ||
            trening.city.toLowerCase().includes(this.fCity.toLowerCase())) &&
          (this.fGroup == "Grupa" || trening.group.toLowerCase().includes(this.fGroup.toLowerCase())) &&
          (this.fHour == "Godzina" || trening.hour == this.fHour)
      );
    },
    uniqueDates() {
      this.uniqueDates = this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.date]: current,
        });
      }, {});
    },

    uniqueLocation() {
      return this.trenings
        .map((x) => x.location)
        .filter((v, i, s) => s.indexOf(v) === i)
        .sort();
    },

    uniqueCity() {
      return this.trenings
        .map((x) => x.city)
        .filter((v, i, s) => s.indexOf(v) === i)
        .sort();
    },

    uniqueGroup() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.group]: current,
        });
      }, {});
    },

    uniqueLevel() {
      return this.trenings.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.level]: current,
        });
      }, {});
    },
  },

  methods: {
    reset() {
      // this.filteredTrenings = [];
      this.trenings = this.proxyTable;
      this.fLevel = "Poziom";
      this.fGroup = "Grupa";
      this.fCity = "Miasto";
      this.fAge = "Wiek";
      this.fDay = "Dzień";
      this.fSzkola = "Szkoła";
      this.fHour = "Godzina";
    },
    log() {
      console.log(parseInt(this.fAge) + 1);
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
  /* width: 169px; */
  max-height: 37px;
  height: 37px;
  color: #000;
  font-size: 13px;
  background: #fff;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 15px;
}

.trenings-collapse {
  height: 728px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-content: flex-start;
}
.trenings-section {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}

.no-results-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-results-card-container {
  /* width: clamp(340px, 1070px, 1100px); */
  height: 230px;
  border-radius: 25px;
  background: #2c303d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-results-card-container p {
  font-size: 1.5rem;
  padding: 10%;
  color: #fff;
  text-align: center;
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

.fa-x {
  color: red;
}
</style>