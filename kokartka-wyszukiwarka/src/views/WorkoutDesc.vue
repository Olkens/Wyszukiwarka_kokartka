<template>

  <div>
    <div>
      <div class="header">
        {{ brand }}
      </div>
    </div>
    <router-link class="btn-back" to="/">
      <p>Wróc do wyszukiwarki</p>
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
          <h2>Poziom</h2>
          <p>{{ level }}</p>
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
            <p class="participants-cont-bg"></p>
            <p class="participants-ratio">
            <p class="participants-ratio-label">{{ participantsCurrent }} / {{ participantsMax }}</p>
            </p>
          </div>
        </div>
      </div>
      <div class="workout-payments">
        <div class="signup" v-if="participantsCurrent < participantsMax">
          <h2>Zapisz się</h2>
          <a :href="links.registration" class="zapis-btn-desc" target="_blank">Zapisz się na zajęcia</a>
        </div>
        <div v-if="participantsCurrent >= participantsMax">
          <div class="workoutFull">Brak wolnych miejsc</div>
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
        "https://kokartka.info/zapisy/api/workouts/" +
        this.$route.params.id,
      desc: {},
      payments: {},
      links: {},
      dates: {},
      level: '',
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
      muchaKolor: '#5D9DFC',
      kadraKolor: '#C800D6',
      juniorKolor: '#4AB925',
      chosenColor: "",
      moneyArr: [],
      moneyAmount: 0,
    };
  },
  methods: {
    log() {
      console.log(this.url);
      console.log(this.desc.id);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
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
      this.moneyArr = res.data.payments.amount;
      this.moneyAmount = res.data.payments.amount.amount;
    })
      .finally(() => {
      });
    axios.get("https://kokartka.info/zapisy/api/workouts").then(res => {
      const data = res.data
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.$route.params.id) {
          this.group = data[i].group;
          this.brand = data[i].brand;
          if (data[i].level == 'beginner') {
            this.level = 'Podstawowy'
          }
          if (data[i].level == 'advanced') {
            this.level = 'Zaawansowany'
          }
          if (data[i].level == 'beginner_older') {
            this.level = 'Starszy podstawowy'
          }
          if (data[i].brand.includes('kokartka')) {
            this.chosenColor = this.kokartaKolor;
          } else if (data[i].brand.includes('mucha')) {
            this.chosenColor = this.muchaKolor;
          } else if (data[i].brand.includes('kadra')) {
            this.chosenColor = this.kadraKolor;
          } else if (data[i].brand.includes('junior')) {
            this.chosenColor = this.juniorKolor;
          }
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

@media screen and (max-width: 1024px) {
  .desc-main-container {
    flex-direction: column;
    justify-content: space-around;
    gap: 0;
    align-items: center;
  }

  .btn-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .workout-desc {
    min-height: 500px !important;
  }

  .workout-payments {
    min-height: 200px !important;
  }

  .workout-desc,
  .wokrout-schedule,
  .workout-payments {
    width: 100% !important;
    justify-content: center !important;
  }

  .box {
    display: flex;
    flex-direction: column;
  }

  .signup {
    min-width: 100%;
  }

  .btn-back {
    width: 200px !important;
  }
}

.desc-main-container>* {
  flex: 1 1 0;
}

.header {
  font-family: 'Poppins', sans-serif;
  /* width: 100vw; */
  height: 132px;
  background-color: v-bind(chosenColor);
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
  background-image: linear-gradient(v-bind(chosenColor), v-bind(chosenColor));
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
  /* justify-content: space-between; */
  /* align-items: center; */
}

.signup {
  border-radius: 5px;
  margin-top: 10px;
  padding: 25px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.workoutFull {
  border-radius: 5px;
  margin-top: 10px;
  padding: 25px;
  background-color: #aaa;
  color: #fff;
  text-align: center;
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
  background-color: v-bind(chosenColor);
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
  background-color: v-bind(chosenColor);
  margin-top: 20px;
  height: 82px;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.btn-back {
  font-family: 'Poppins', sans-serif;
  background-color: #FFF;
  color: #000;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17%;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}

.progress-bar {
  background-color: v-bind(chosenColor);
  display: block;
  z-index: 4;
  border-radius: 3px;
}

.participants-ratio {
  position: absolute;
  height: 24px;
  color: #000;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.participants-cont-bg {
  background-color: #fff;
  width: 100%;
  height: 24px;
  position: absolute;
  top: 0;
  border-radius: 3px;
  z-index: 1;
  border: none;
}

.participants-ratio-label {
  font-size: 12px;
  font-weight: bold;
}
</style>