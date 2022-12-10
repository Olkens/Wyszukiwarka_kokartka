<template>
  <div>
    <v-expansion-panels class="panels-wrapper" expand-icon="$expand" theme="dark">
      <v-expansion-panel>
        <v-expansion-panel-title class="panel-title">Informacje o grupach</v-expansion-panel-title>
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
    <Heading class="main-head"></Heading>
    <Trening2></Trening2>
  </div>
</template>
<script>
import Trening2 from "../components/Trening2.vue";
import Heading from "../components/Heading.vue";

export default {
  data() {
    return {
    };
  },

  components: { Trening2, Heading },
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
.v-expansion-panel{
  background-color: #610cab;
}
.panel-title {
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
}
</style>