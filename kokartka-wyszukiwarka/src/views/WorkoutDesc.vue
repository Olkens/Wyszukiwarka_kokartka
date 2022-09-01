<template>
  <div>

    <div class="header">
      <p v-if="brand.includes('kokartka')">
        Kokartka
      </p>
      <p v-else-if="brand.includes('mucha')">
        Mucha
      </p>
    </div>
    <router-link class="btn-back" to="/">
      <p>&#171; powrót do wyszukiwarki</p>
    </router-link>
    <div class="desc-main-container">
      <div class="workout-desc">
        <div class="box desc-html">
          <h2 class="title">Opis Zajęć:</h2>
          <div v-html="desc.description"></div>
        </div>
      </div>
      <div class="wokrout-schedule">
        <div class="box">
          <h2 class="title">Plan zajęć 2021/2022</h2>
          <div class="group"></div>
          <div class="day">{{ day }} - {{ hour }}</div>
          <div class="duration">Czas trwania: {{ duration }} Godzina </div>
          <div class="age"></div>
        </div>
        <div class="box">
          <h2>Cena</h2>
        </div>
        <div class="box">
          <h2>Lokalizacja</h2>
          {{ address }}
        </div>
        <div class="participants box">
          <h2>Ilość wolnych miejsc:</h2>
          <div class="participants-cont">
            <div class="progress-bar" :style="{ width: width + '%', height: height }">
            </div>
            <div class="participants-cont-bg"></div>
            <p class="participants-ratio">
            <p class="participants-ratio-label">{{ participantsCurrent }} / {{ participantsMax }}</p>
            </p>
          </div>
        </div>
      </div>
      <div cless="workout-payments">
        <div class="signup">
          <h2>Zapisz się</h2>
          <button class="zapis-btn-desc">Zapisz się na zajęcia</button>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <a href="tel:794294259">
        <p>Zadzwoń już teraz +48 794 294 259</p>
      </a>
      <a href="mailto:biuro@kokartka.info">
        <p>Napisz od nas: biuro@kokartka.info</p>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url:
        "https://kokartka.info/zapisy/api/workouts" +
        this.$route.params.id,
      desc: {},
      payments: {},
      links: {},
      dates: {},
      day: "",
      days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      hour: "",
      address: "",
      duration: "",
      group: "",
      brand: "",
      participants: 0,
      participantsMax: 0,
      participantsCurrent: 0,
      height: '24px',
      width: 0,
      kokartaKolor: '#ff3375',
      muchaKolor: '#5D9DFC'
    };
  },
  methods: {
    log() {
      console.log(this.url);
      console.log(this.desc.id);
    },
  },
  mounted() {
    axios.get(this.url).then((res) => {
      this.desc = res.data;
      this.payments = res.data.payments;
      this.links = res.data.links;
      this.date = res.data.dates[0];
      this.day = this.days[res.data.dates[0].day];
      this.hour = this.date.hour;
      this.address = this.payments.address
      this.duration = this.date.duration / 60 / 60;
      this.participants = res.data.participants;
      this.participantsMax = this.participants.max;
      this.participantsCurrent = this.participants.current;
      this.width = (this.participantsCurrent / this.participantsMax) * 100;
    })
      .finally(() => {
      });
    axios.get("https://kokartka.info/zapisy/api/workouts").then(res => {
      const data = res.data
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.$route.params.id) {
          this.group = data[i].group;
          this.brand = data[i].brand;
        }
      }
    })
  },

};
</script>

<style scoped>
.desc-main-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.desc-main-container>* {
  flex: 1 1 0;
}

.header {
  font-family: 'Poppins', sans-serif;
  /* width: 100vw; */
  height: 132px;
  background-color: var(--mucha-color);
  padding-left: 6rem;
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  /* margin-left: calc(-50vw + 49% + 10px); */
  /* margin-top: -17.9%; */
  margin-bottom: 1rem;
}

.desc-html:deep(h2),
h2 {
  padding-bottom: 6px;
  background-image: linear-gradient(#5D9DFC, #5D9DFC);
  background-size: 15% 3px;
  background-position: bottom left;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: 'Poppins', sans-serif;

}

.desc-html:deep(p) {
  color: #E9E9E9;
  font-size: 12px;
  margin-bottom: 30px;
}

.workout-desc,
.wokrout-schedule,
.workout-payments {
  width: calc(100% / 3);
  min-height: 553px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
}

.signup {
  border-radius: 5px;
  margin-top: 10px;
  padding: 25px;
  background-color: #fff;
}

.signup>h2 {
  color: #000;
}

.box {
  padding: 25px;
  background-color: #2C303D;
  border-radius: 5px;
  margin-top: 10px;
  color: #E9E9E9;
}

.workout-payments .box {
  background-color: #fff;
  color: #000;
}

.workout-payments h3 {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 16px;
}

.zapis-btn-desc {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5D9DFC;
  color: #fff;
  width: 96%;
  margin: 0 auto;
  height: 35px;
  font-weight: bold;
  border-radius: 3px;
  font-size: 12px;
  margin-top: 15px;
  border: none;
}

.btn-container {
  display: flex;
  justify-content: space-between;
}

.btn-container a {
  display: flex;
  width: 523px;
  background-color: #5D9DFC;
  margin-top: 20px;
  height: 82px;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.btn-back {
  background-color: #5D9DFC;
  color: #fff;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 12px;
}

.progress-bar {
  background-color: #5D9DFC;
  display: block;
}

.participants-ratio {
  position: absolute;
  color: #000;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.participants-cont-bg {
  background-color: #fff;
  width: 100%;
  height: 24px;
  position: absolute;
  top: 0;
  border-radius: 2px;
}

.participants-ratio-label {
  font-size: 12px;
  font-weight: bold;
}
</style>