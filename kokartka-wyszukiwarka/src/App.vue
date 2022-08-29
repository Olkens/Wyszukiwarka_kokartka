<script setup>
import Trening2 from "./components/Trening2.vue";
import Heading from "./components/Heading.vue";
</script>
<template>
  <div>
    <Heading class="main-head"></Heading>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      props: {
        level: String,
        grupa: String,
      },
      // tab: [],
    };
  },
  // created() {
  //   const apitab = [];
  //   axios
  //     .get("https://kokartka.stronazen.pl/zapisy/api/workouts")
  //     .then(function (response) {
  //       for (let i = 0; i < response.data.length; i++) {
  //         apitab.push(response.data[i]);
  //       }
  //       // console.log(response.data);
  //       // console.log(apitab);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  //   this.tab = apitab;
  //   // console.log(this.tab);
  // },
  // methods: {
  //   log() {
  //     console.log(this.tab[8].id);
  //   },
  // },
};
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 4rem;
  /* font-weight: normal; */
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-content: center;
}

#app>div {
  width: 1100px;
}

::-webkit-scrollbar {
  background: #1f2432;
  width: 10px;
  border-radius: 2px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #3f4a6a;
  border-radius: 10px;
  width: 5px;
}

.app-tr-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1100px;
  gap: 15px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.main-head {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    flex-direction: column;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
