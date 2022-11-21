<script setup>
</script>
<template>
  <div>
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
};
</script>

<style>
@import "./assets/base.css";

:root {
  --mucha-color: #5d9dfc;
  --kokartka-color: #ff3375;
}

#app {
  max-width: 1380px;
  margin: 0 auto;
padding: 0 20px;
  margin-top: 4rem;
  /* font-weight: normal; */
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-content: center;
}

#app > div {
  width: 1150px;

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
  max-width: 1200px;
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

.main-head {
    padding-left: 20px;
  padding-right: 20px;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
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
