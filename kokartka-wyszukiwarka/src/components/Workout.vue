<template>
  <div class="tr-main-container">
    <div class="tr-heading">
      <div v-if="trening.brand == 'kokartka'" class="Kokartka-color">
        <p>
          {{ trening.brand.toUpperCase() }}
        </p>
      </div>
      <div v-else-if="trening.brand == 'mucha'" class="Mucha-color">
        <p>
          {{ trening.brand.toUpperCase() }}
        </p>
      </div>
      <div v-if="trening.brand == 'junior'" class="Junior-color">
        <p>
          {{ trening.brand.toUpperCase() }}
        </p>
      </div>
      <div v-if="trening.brand == 'pro'" class="pro-color">
        <p>
          {{ trening.brand.toUpperCase() }}
        </p>
      </div>
    </div>
    <div class="tr-info-box-1">
      <div class="tr-info-1">
        <div class="tr-info-1-box">
          <div>
            <p class="faded-title">GRUPA</p>
            <p>{{ trening.group }}</p>
          </div>
          <div>
            <p class="faded-title">POZIOM</p>
            <p v-if="trening.level === 'beginner'">Podstawowy</p>
            <p v-else-if="trening.level === 'beginner_older'">
              początkująca starsza
            </p>
            <p v-if="trening.level === 'advanced'">zaawansowany</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tr-info-box-2 tr-info-box-2-grid">
      <div class="tr-info-2">
        <div class="tr-info-2-box tr-border-left">
          <div>
            <p class="faded-title">Szkoła</p>
            <p>{{ trening.location }}</p>
          </div>
          <div>
            <p class="faded-title">Wiek</p>
            <p>{{ trening.age }} LAT</p>
          </div>
        </div>
      </div>
      <div class="tr-info-3 tr-border-left">
        <div class="tr-info-3-box ">
          <div>
            <p class="faded-title">Dzień</p>
            <div
              v-if="
                trening.thirdDay != 'Invalid Date' &&
                trening.secondDay != 'Invalid Date'
              "
            >
              <p>{{ trening.firstDay }}: {{ trening.firstDate }}</p>
              <p>{{ trening.secondDay }}: {{ trening.secondDate }}</p>
              <p>{{ trening.thirdDay }}</p>
            </div>
            <div v-if="trening.secondDay != 'Invalid Date'">
              <p>{{ trening.firstDay }} {{ trening.firstDate }}</p>
              <p>{{ trening.secondDay }} {{ trening.secondDate }}</p>
            </div>
            <div v-else>
              <p>{{ trening.firstDay }} {{ trening.firstDate }}</p>
            </div>
          </div>
          <!-- <div>
            <p class="faded-title">Godzina</p>
            <div v-if="trening.secondDate == 'NaN:NaN'">
              <p>{{ trening.firstDate }}</p>
            </div>
            <div v-else>
              <p>{{ trening.firstDate }}, {{ trening.secondDate }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="tr-btn-container">
      <router-link
        class="tr-btn tr-btn-wi"
        :to="{ path: '/opis/' + trening.id }"
      >
        Więcej informacji
      </router-link>
      <a class="tr-btn tr-btn-zs" :href="trening.signUp" target="_blank">
        Zapisz się</a
      >
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
    return {};
  },
  methods: {
    logD() {
      console.log(this.apiWorkoutDesc);
      console.log(this.apiWorkDesc);
    },
  },
};
</script>
<style>
.tr-main-container {
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 368px;
  min-width: 368px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 10px;
  height: 187px;
  background-color: #1a1d27;
  text-transform: uppercase;
  color: #fff;
  row-gap: 10px;
  grid-template-areas:
    "tr-heading tr-heading"
    "tr-info-box-1 tr-info-box-2"
    "tr-btn-container tr-btn-container";
}

.tr-heading {
  grid-area: tr-heading;
  font-size: 16px;
  font-weight: bold;
}

.trMainContainerSecondBgcolor0 {
  background-color: #2c303d !important;
}

.trMainContainerSecondBgcolor {
  background-color: #1a1d27;
}

.tr-info-box-1 {
  grid-area: 1 / 1 / 2 / 2;
  grid-area: tr-info-box-1;
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
  grid-area: tr-info-box-2;
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
  /* margin-top: 15px; */
  align-items: flex-end;
  height: 100%;
  grid-area: tr-btn-container;
}

.tr-info-box-2-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
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

.tr-btn-wi:hover {
  background-color: #fff;
  color: #2c303d;
}

.tr-btn-zs {
  background: #fff;
  color: #000;
}

.tr-btn-zs:hover {
  background-color: #2c303d;
  color: #fff;
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

.Junior-color {
  color: #4ab925;
}

.pro-color {
  color: #c800d6;
}
</style>