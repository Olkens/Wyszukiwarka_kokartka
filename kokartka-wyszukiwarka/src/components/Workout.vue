<template>
  <div class="tr-main-container">
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
            <p>{{ trening.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tr-info-box-2 tr-info-box-2-grid">
      <div class="tr-info-2">
        <div class="tr-info-2-box tr-border-left">
          <div>
            <p class="faded-title">Wiek</p>
            <p>{{ trening.age }} LAT</p>
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
            <p v-if="trening.group.includes('kokartka')" class="Kokartka-color">
              Kokartka
            </p>
            <p v-else-if="trening.group.includes('mucha')" class="Mucha-color">
              Mucha
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tr-btn-container">
      <a class="tr-btn tr-btn-wi">
        Więcej informacji
        <!-- <router-link :workoutDesc="trening.desc" to="/opis"
          >click me</router-link
        > -->
      </a>
      <a class="tr-btn tr-btn-zs" :href="trening.signUp" target="_blank">
        Zapisz się</a
      >
      <!-- <button @click="zlapDesc"></button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trening: Object,
    treningsDesc: Object,
  },
  data() {
    return {
      apiWorkoutDesc: [],
    };
  },
  computed() {
    console.log(apiD);
  },
  methods: {
    logD() {
      console.log(this.apiWorkoutDesc);
      console.log(this.trening.desc);
    },
    zlapDesc() {
      fetch("https://kokartka.stronazen.pl" + this.trening.desc)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.apiWorkoutDesc.push({
            workoutDesc: data.description,
          });
        });
      console.log("https://kokartka.stronazen.pl" + this.trening.desc);
      console.log(this.apiWorkoutDesc);
    },
  },
};
</script>
<style>
.tr-main-container {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: repeat(2, 0fr);
  max-width: 348px;
  min-width: 348px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 10px;
  height: 137px;
  background-color: #1a1d27;
  text-transform: uppercase;
  color: #fff;
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

.Kokartka-color {
  color: #ff3375;
}

.Mucha-color {
  color: #5d9dfc;
}
</style>