<template>
  <div class="tr-main-container">
    <WorkoutHeader :trening="trening"></WorkoutHeader>
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
        <div class="tr-info-3-box">
          <div>
            <p class="faded-title">Dzień</p>
            <div v-if="trening.firstDay">
              <div>
                <p v-if="trening.firstDate">
                  {{ trening.firstDay }}: {{ trening.firstDate }}
                </p>
                <p v-if="trening.secondDate">
                  {{ trening.secondDay }}: {{ trening.secondDate }}
                </p>
                <p v-if="trening.thirdDate">
                  {{ trening.thirdDay }}: {{ trening.thirdDate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tr-btn-container">
      <router-link class="tr-btn tr-btn-wi" :to="{ path: '/opis/' + trening.id }">
        Więcej informacji
      </router-link>
      <div v-if="trening.signUp">
        <a class="tr-btn tr-btn-zs" :style="{ background: kokartka }" :href="trening.signUp" target="_blank">
          Zapisz się</a>
      </div>
      <div v-else>
          <div class="tr-btn tr-btn-zs" :style="{ background: kokartka }">
            Zapisy wkrótce!
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import WorkoutHeader from "./WorkoutHeader.vue";
export default {
  props: {
    trening: Object,
    treningsDesc: Object,
  },
  components: {
    WorkoutHeader,
  },
  data() {
    return {
      kokartka:
        this.trening.brand == "kokartka"
          ? "#D1519D"
          : this.trening.brand == "junior"
            ? "#F97C16"
            : this.trening.brand == "pro"
              ? "#5A2287"
              : this.trening.brand == "mucha"
                ? "#2CA9E0"
                : "#fff",
    };
  },
};
</script>
<style>
.tr-main-container {
  display: grid;
  grid-template-columns: 0.6fr 1.6fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 375px;
  min-width: 375px;
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
}

.tr-heading p {
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
  grid-template-columns: 1.1fr 0.9fr;
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
  border-radius: 5px;
  font-weight: bold;
  padding: 2px;
  display: inline-block;
}

.tr-btn-wi {
  color: #fff;
  border: 1px solid #fff;
}

.tr-btn-wi:hover {
  background-color: #fff;
  color: #2c303d;
}

.tr-btn-zs {
  background: #fff;
  color: #fff;
}

.tr-btn-zs:hover {
  background-color: #2c303d;
  color: #fff;
}

.faded-title {
  color: #616a89;
}

.Kokartka-color {
  color: #d1519d;
}

.Mucha-color {
  color: #2ca9e0;
}

.Junior-color {
  color: #f97c16;
}

.pro-color {
  color: #5A2287;
}
</style>
