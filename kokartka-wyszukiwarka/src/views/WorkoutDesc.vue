<template>
  <div>
    <div class="header">
      <p>MUCHA</p>
    </div>
    <router-link to="/">&#171; powrót do wyszukiwarki</router-link>
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
          <h2>zapisy</h2>
          <p>Zapisy rozpoczniemy na początku września 2022. Osoby zainteresowane prosimy o wiadomość mailową z podaniem
            szkoły, grupy oraz nr telefonu na biuro@kokartka.info. Jak tylko rozpoczniemy zapisy, zostaną Państwo
            poinformowani mailowo i sms-owo.</p>
        </div>
      </div>
      <div class="workout-payments">
        <div class="box">
          <h3>Dane do Płatności</h3>
          <p>mBank</p>
          <p>{{ payments.bankAccount }}</p>
          <p>{{ payments.name }}</p>
          <p>{{ payments.address }}</p>
          <p>w tytule: {{ payments.title }}</p>
          <div>
            <a :href="links.registration" class="zapis-btn">
              <p>Zapisz się na zajęcia</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url:
        "https://kokartka.stronazen.pl/zapisy/api/workouts/" +
        this.$route.params.id,
      desc: {},
      payments: {},
      links: {},
      dates: {},
      day: "",
      days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      hour: "",
      duration: "",
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
      this.hour = this.date.hour
      this.duration = this.date.duration / 60 / 60;
    })
      .finally(() => {
      });
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

.header {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 132px;
  background-color: #5D9DFC;
  padding-left: 10%;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;

}

.desc-html:deep(h2),
h2 {
  padding-bottom: 6px;
  background-image: linear-gradient(#5D9DFC, #5D9DFC);
  background-size: 15% 3px;
  background-position: bottom left;
  background-repeat: no-repeat;
  margin-bottom: 30px;
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
  width: 33%;
}

.box {
  padding: 25px;
  background-color: #2C303D;
  border-radius: 5px;
  margin-top: 10px;
  color: #E9E9E9
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

.zapis-btn {
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
}
</style>