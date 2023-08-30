<template>
  <div>
    <div>
      <div>
        <v-expansion-panels
          class="panels-wrapper"
          expand-icon="$expand"
          theme="dark"
        >
          <v-expansion-panel>
            <v-expansion-panel-title class="panel-title">
              <div></div>
              <div>
                FILTRY<font-awesome-icon
                  icon="fa-solid fa-filter"
                  class="icon-left"
                />
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="app-tr-container">
                <div class="box-cont">
                  <div>
                    <!-- <label for="group">GRUPA</label> -->
                    <select name="grupa" id="group" v-model="this.fGroup">
                      <option value="">Grupa</option>
                      <option value="Grupa" disabled selected hidden>
                        Grupa
                      </option>
                      <option
                        v-for="grupa in avalibleGroups"
                        :value="grupa"
                        :key="grupa.id"
                      >
                        {{ grupa }}
                      </option>
                      <option value="DORO">DOROŚLI</option>
                    </select>
                  </div>

                  <div class="box flex-label">
                    <!-- <label for="level">LEVEL</label> -->
                    <select name="level" id="level" v-model="this.fLevel">
                      <option value="">Poziom</option>
                      <option value="Poziom" disabled selected hidden>
                        Poziom
                      </option>
                      <option value="beginner">Podstawowy</option>
                      <option value="advanced">Zaawansowany</option>
                      <option value="beginner_older">Starsza podstawowa</option>
                    </select>
                  </div>

                  <div class="box flex-label">
                    <!-- <label for="age">WIEK</label> -->
                    <select name="age" id="age" v-model="this.fAge">
                      <option value="Wiek">Wiek</option>
                      <option value="Wiek" disabled selected hidden>
                        Wiek
                      </option>
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
                      <option value="Miasto" disabled selected hidden>
                        Miasto
                      </option>
                      <option
                        v-for="city in uniqueCity"
                        :value="city"
                        :key="city.id"
                      >
                        {{ city }}
                      </option>
                    </select>
                  </div>

                  <div class="box flex-label">
                    <select name="szkola" id="szkola" v-model="this.fSzkola">
                      <option value="">Szkoła</option>
                      <option value="Szkoła" disabled selected hidden>
                        Szkoła
                      </option>
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
                      <option value="Dzień" disabled selected hidden>
                        Dzień
                      </option>
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
                      <option value="Godzina" disabled selected hidden>
                        GODZINA
                      </option>
                      <!-- <option :value={ trening.date } v-for="trening in this.uniqueDates">{{ trening.date }}</option> -->
                      <option value="9">9:00 - 10:00</option>
                      <option value="10">10:00 - 11:00</option>
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
                  <button class="reset-btn" @click="reset()">Wyczyść</button>
                </div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <div class="trenings-section" style="margin-top: 25px">
      <div v-if="!isLoaded">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else>
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
  </div>
</template>

<script>
import Workout from "./Workout.vue";
import fetchData from "../mixins/fatchData";

export default {
  mixins: [fetchData],
  props: ["trening", "trening2"],
  data() {
    return {
      isLoaded: false,
      fLevel: "Poziom",
      fAge: "Wiek",
      fGroup: "Grupa",
      fDay: "Dzień",
      fSzkola: "Szkoła",
      fHour: "Godzina",
      fCity: "Miasto",
      avalibleGroups: [
        "ZÓŁTA",
        "POMARAŃCZOWA",
        "CZERWONA",
        "LAWENDOWA",
        "RÓŻOWA",
        "FIOLETOWA",
        "NIEBIESKA",
        "GRANATOWA",
        "ZIELONA",
        "KADRA",
      ],
      treningDays: [],
      isFiltered: false,
      url: "https://kokartka.info/zapisy/api/workouts",
    };
  },
  computed: {
    filterWorkouts() {
      return this.trenings.filter(
        (trening) =>
          (this.fLevel == "Poziom" || trening.level.includes(this.fLevel)) &&
          (this.fDay == "Dzień" ||
            trening.firstDay.includes(this.fDay) ||
            trening.secondDay.includes(this.fDay) ||
            trening.thirdDay.includes(this.fDay)) &&
          (this.fAge == "Wiek" ||
            (trening.filterAgeMin <= parseInt(this.fAge) &&
              trening.filterAgeMax >= parseInt(this.fAge))) &&
          (this.fSzkola == "Szkoła" ||
            trening.location
              .toLowerCase()
              .includes(this.fSzkola.toLowerCase())) &&
          (this.fCity == "Miasto" ||
            trening.city.toLowerCase().includes(this.fCity.toLowerCase())) &&
          (this.fGroup == "Grupa" ||
            trening.group.toLowerCase().includes(this.fGroup.toLowerCase())) &&
          (this.fHour == "Godzina" ||
            trening.firstHour == this.fHour ||
            trening.secondHour == this.fHour)
      );
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
      console.log(this.trenings.date);
    },
  },

  components: { Workout },
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
  width: 140px;
  height: 37px;
  background: #2e3a59 !important;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  text-align: center;
  border: 1px solid #3f4a6a !important;
  line-height: 10px;
  padding: 5px 0;
  font-weight: bold;
  text-align: center;
}

.reset-btn {
  max-width: 169px;
  /* width: 169px; */
  max-height: 37px;
  height: 36px;
  color: #000;
  font-size: 13px;
  background: #fff;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 13px;
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
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}

.no-results-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.expansion-content {
  display: flex;
  flex-direction: column;
}

.panel-content__container {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-direction: row;
  padding: 1.5rem 0.2rem;

  @media (max-width: 786px) {
    flex-direction: column;
  }
}

.v-expansion-panel {
  background-color: #2c303d;
}

.panel-title {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;

  @media (max-width: 786px) {
    font-size: 0.8rem !important;
  }
}
</style>
