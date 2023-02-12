<template>
  <div class="main-cont-workdesc">
    <div>
      <router-link class="btn-back" to="/">
        <font-awesome-icon icon="fa-solid fa-angle-left" style="padding-right: 5px;" /> <p> Wróc do wyszukiwarki</p>
      </router-link>
      <div class="header" v-bind:style="{ backgroundImage: 'url(' + pathToBgPhoto + ')' }">
        {{ brand }}
      </div>
    </div>

    <div class="desc-main-container">
      <div class="workout-desc">
        <div class="box desc-html">
          <h2 class="title">Opis Zajęć:</h2>
          <div v-html="desc.description"></div>
        </div>
      </div>
      <div class="wokrout-schedule">
        <div class="box">
          <h2 class="title">Termin zajęć</h2>
          <div class="group"></div>
          <div v-for="date in daysArr" :key="date.hour">
            <div>{{ days[date.day] }}: {{ date.hour }}</div>
          </div>
          <div class="duration">Czas trwania: {{ duration }} Godzina</div>
        </div>
        <div class="box">
          <h2>Poziom</h2>
          <p>{{ level }}</p>
        </div>
        <div class="participants box">
          <h2>Ilość wolnych miejsc:</h2>
          <div class="participants-cont">
            <div class="progress-bar" :style="{ width: width + '%', height: height }"></div>
            <p class="participants-cont-bg"></p>
            <div class="participants-ratio">
              <p class="participants-ratio-label">
                {{ participantsCurrent }} / {{ participantsMax }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="workout-payments">
        <div class="img-box">
          <img :src="imgSrc">
        </div>
        <div class="signup" v-if="participantsCurrent < participantsMax">
          <a :href="links.registration" class="zapis-btn-desc" target="_blank"> Zapisz się na zajęcia <font-awesome-icon
              :icon="['fas', 'check']" class="fa-icon" /></a>
        </div>
        <div v-if="participantsCurrent >= participantsMax">
          <div class="workoutFull">Brak wolnych miejsc</div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <a href="tel:794294259">
        <font-awesome-icon icon="fa-solid fa-phone" class="icon-right" /> <p>Zadzwoń już teraz: <b>+48 794 294 259</b></p>
      </a>
      <a href="mailto:biuro@kokartka.info">
        <font-awesome-icon icon="fa-solid fa-envelope" class="icon-right" /><p>Napisz od nas: <b>biuro@kokartka.info</b></p>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: "https://kokartka.stronazen.pl/zapisy/api/workouts/" + this.$route.params.id,
      desc: {},
      payments: {},
      links: {},
      dates: {},
      daysArr: [],
      level: "",
      day: "",
      days: [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
      ],
      hour: "",
      address: "",
      duration: "",
      group: "",
      brand: "",
      participants: 0,
      participantsMax: 0,
      participantsCurrent: 0,
      height: "24px",
      width: 0,
      kokartaKolor: "#D1519D",
      muchaKolor: "#2CA9E0",
      kadraKolor: "#C800D6",
      juniorKolor: "#F97C16",
      chosenColor: "",
      moneyArr: [],
      moneyAmount: 0,
      pathToBgPhoto: '',
      imgSrc: '',
    };
  },
  mounted() {
    axios
      .get(this.url)
      .then((res) => {
        this.desc = res.data;
        this.payments = res.data.payments;
        this.links = res.data.links;
        this.date = res.data.dates[0];
        this.daysArr = res.data.dates;
        this.day = this.days[this.date.day];
        this.hour = this.date.hour;
        this.duration = this.date.duration / 60 / 60;
        this.participants = res.data.participants;
        this.participantsMax = this.participants.max;
        this.participantsCurrent = this.participants.current;
        this.width = (this.participantsCurrent / this.participantsMax) * 100;
        this.moneyArr = res.data.payments.amount;
        this.moneyAmount = res.data.payments.amount.amount;
      })
    axios.get("https://kokartka.stronazen.pl/zapisy/api/workouts").then((res) => {
      const data = res.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.$route.params.id) {
          this.group = data[i].group;
          this.brand = data[i].brand;
          this.address = data[i].location_address.street;
          this.city = data[i].location_address.city;
          this.pathToBgPhoto = `/wyszukiwarka/assets/${data[i].brand}.png`
          this.imgSrc = `/wyszukiwarka/assets/${data[i].brand}-img.png`

          if (data[i].level == "beginner") {
            this.level = "Podstawowy";
          }
          if (data[i].level == "advanced") {
            this.level = "Zaawansowany";
          }
          if (data[i].level == "beginner_older") {
            this.level = "Starszy podstawowy";
          }
          if (data[i].brand.includes("kokartka")) {
            this.chosenColor = this.kokartaKolor;
          } else if (data[i].brand.includes("mucha")) {
            this.chosenColor = this.muchaKolor;
          } else if (data[i].brand.includes("pro")) {
            this.chosenColor = this.kadraKolor;
          } else if (data[i].brand.includes("junior")) {
            this.chosenColor = this.juniorKolor;
          }
        }
      }
    });
  },
};
</script>

<style scoped lang="scss">
.desc-main-container {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  /* min-height: 2000px; */
}

.main-cont-workdesc {
  margin: 0 auto;
  width: 1035px;
}

@media screen and (max-width: 1024px) {
  .main-cont-workdesc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }

  .btn-back {
    margin-bottom: 1rem;
    width: 100% !important;

  }

  .header {
    padding-left: 0 !important;
    justify-content: center;
    width: 100vw;
  }

  .desc-main-container {
    flex-direction: column;
    justify-content: space-around;
    gap: 0;
    align-items: center;
    flex-wrap: nowrap;
  }

  .desc-main-container>* {
    flex: 0 !important;
  }

  .btn-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .workout-desc {
    min-height: 500px !important;
    overflow: visible;
  }

  .workout-payments {
    min-height: 200px !important;
    margin-top: 1em;
  }

  .workout-desc,
  .wokrout-schedule,
  .workout-payments {
    width: 60% !important;

    @media (max-width:768px){
      width: 100% !important;
    }
    /* justify-content: center !important; */
  }

  .box {
    display: flex;
    flex-direction: column;
  }

  .signup {
    min-width: 100%;
 
  }
}

.desc-main-container>* {
  flex: 1 1 0;
}

.header {
  font-family: "Poppins", sans-serif;
  /* width: 100vw; */
  height: 132px;
  background: no-repeat center;
  padding-left: 6rem;
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border-radius: 15px;
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
  font-family: "Poppins", sans-serif;
}

.desc-html:deep(p) {
  color: #e9e9e9;
  font-size: 12px;
  margin-bottom: 30px;
}

.workout-desc,
.wokrout-schedule,
.workout-payments {
  // width: calc(100% / 3);
  /* min-height: 553px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
}

.signup {
  border-radius: 5px;
  padding: 25px;
  background-color: v-bind(chosenColor);
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
  background-color: #2c303d;
  border-radius: 5px;
  margin-top: 10px;
  color: #e9e9e9;
}

.img-box {
  padding: 0px;
  margin-top: 10px;
  height: 100%;
  width: 100%;
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
  background-color: #fff;
  color: #000;
  width: 96%;
  margin: 0 auto;
  height: 35px;
  font-weight: bold;
  border-radius: 3px;
  font-size: 12px;
  border: none;
}

.fa-icon {
  padding-left: 5px;
}

.btn-container {
  display: flex;
  justify-content: space-between;
}

.btn-container a {
  display: flex;
  width: 475px;
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
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  color: #000;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: semi-bold;
  padding: 0 12px;
  margin-bottom: 20px;
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