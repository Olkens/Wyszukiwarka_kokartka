<template>
  <div>
    <div>
        <MainHeader></MainHeader>
    </div>
    <v-expansion-panels class="panels-wrapper" expand-icon="$expand" theme="dark">
      <v-expansion-panel>
        <v-expansion-panel-title class="panel-title"> <i class="fa-solid fa-question-circle"></i><font-awesome-icon icon="fa-solid fa-arrow-down" />Informacje o
          grupach <font-awesome-icon icon="fa-solid fa-arrow-down" /> </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="panel-content__container">
            <div>
              <p><b>ZÓŁTA</b> - JUNIOR - 2-3 LAT - 1 RAZ W TYG</p>
              <p><b>POMARAŃCZOWA</b> - JUNIOR - 4-5 LAT - 1 RAZ W TYG</p>
              <p><b>CZERWONA</b> - JUNIOR - 5-6 LAT - 1 RAZ W TYG</p>
              <p><b>LAWENDOWA</b> - KOKARTKA - 7-10 LAT - 1 RAZ W TYG</p>
              <p><b>RÓŻOWA</b> - KOKARTKA - 7-10 LAT - 2 RAZY W TYG</p>
            </div>
            <div>
              <p><b>FIOLETOWA</b> - KOKARTKA - 10-14 LAT - 2 RAZY W TYG</p>
              <p><b>NIEBIESKA</b> - MUCHA - 7-14 LAT - 1 RAZ W TYG</p>
              <p><b>GRANATOWA</b> - MUCHA - 7-14 LAT - 2 RAZY W TYG</p>
              <p><b>ZIELONA</b> - DOROŚLI</p>
              <p><b>KADRA</b> - FUNDACJA KOKARTKI I MUCHY - GRUPY ZAWODNICZE - 5-16 LAT - 3 RAZY W TYG</p>
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
<style scoped>
.panels-wrapper {
  margin-bottom: 2rem;
}


.panel-content__container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1.5rem 1rem;
}

.v-expansion-panel {
background-color: #2C303D;
}

.panel-title {
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
}
</style>