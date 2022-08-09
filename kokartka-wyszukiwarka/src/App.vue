<script setup>
import Trening2 from "./components/Trening2.vue";
import Heading from "./components/Heading.vue";
</script>
<template>
  <div>
    <Heading
      class="mar-bot"
      @show-model="showModel"
      :level="level"
      :grupa="grupa"
    />
    <div>
      <Trening2 />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        level: String,
        grupa: String,
      },
    };
  },
  methods: {
    showModel(level, grupa) {
      console.log(level + " " + grupa);
      // console.log(grupa.value);
    },
  },
};
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.app-tr-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1066px;
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

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
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
