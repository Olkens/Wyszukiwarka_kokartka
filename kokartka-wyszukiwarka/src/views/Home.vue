<template>
  <div>
    <a href="#" class="btn-back">Strona główna</a>
    <div>
      <MainHeader></MainHeader>
    </div>
    <v-expansion-panels class="panels-wrapper" expand-icon="$expand" theme="dark">
      <v-expansion-panel>
        <v-expansion-panel-title class="panel-title">
          <div><font-awesome-icon icon="fa-solid fa-arrow-down" class="icon-right"/>Informacje o
            grupach</div>
          <div>Rozwiń<font-awesome-icon icon="fa-solid fa-arrow-down" class="icon-left" /></div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="panel-content__container">
            <div class="expansion-groups">
              <div>
                <img src="../assets/Rectangle69.png" alt="" srcset="">
              </div>
              <div class="expansion-content">
                <p><b>ZÓŁTA</b> - JUNIOR - 2-3 LAT - 1x TYG</p>
                <p><b>POMARAŃCZOWA</b> - JUNIOR - 4-5 LAT - 1x TYG</p>
                <p><b>CZERWONA</b> - JUNIOR - 5-6 LAT - 1x TYG</p>
              </div>
            </div>
            <div class="expansion-groups">
              <div>
                <img src="../assets/Rectangle71.png" alt="" srcset="">
              </div>
              <div class="expansion-content">
                <p><b>LAWENDOWA</b> - KOKARTKA - 7-10 LAT - 1x TYG</p>
                <p><b>RÓŻOWA</b> - KOKARTKA - 7-10 LAT - 2x TYG</p>
                <p><b>FIOLETOWA</b> - KOKARTKA - 10-14 LAT - 2x TYG</p>
              </div>
            </div>
            <div class="expansion-groups">
              <div>
                <img src="../assets/Rectangle70.png" alt="" srcset="">
              </div>
              <div class="expansion-content">
                <p><b>NIEBIESKA</b> - MUCHA - 7-14 LAT - 1x TYG</p>
                <p><b>GRANATOWA</b> - MUCHA - 7-14 LAT - 2x TYG</p>
              </div>
            </div>
            <div class="expansion-groups">
              <div>
                <img src="../assets/Rectangle72.png" alt="" srcset="">
              </div>
              <div class="expansion-content">
                <p><b>ZIELONA</b> - DOROŚLI</p>
                <p><b>KADRA</b> - KADRA - GRUPY ZAWODNICZE - 5-16 LAT - 3x TYG</p>
              </div>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <Trening2></Trening2>
  </div>
</template>
<script>
import Trening2 from "../components/Trening2.vue";
import MainHeader from "../components/MainHeader.vue"

export default {
  data() {
    return {
    };
  },

  components: { Trening2, MainHeader },
};
</script>
<style scoped lang="scss">
.panels-wrapper {
  margin-bottom: 2rem;
}

.expansion-groups {
  display: flex;
  flex-direction: row;
  flex-basis: 0;
  flex-grow: 4;
  font-size: 10px;
}

.expansion-groups div img {
  padding-right: 15px;
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
  @media (max-width: 786px){
    flex-direction: column;
  }
}

.v-expansion-panel {
  background-color: #2C303D;
}


.panel-title {
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  @media (max-width: 786px){
    font-size: 0.8rem !important;
  }
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

@media screen and (max-width: 1024px){
  .btn-back {
    margin-bottom: 1rem;
    width: 100% !important;

  }
}
</style>