<template>
  <div>
    {{ workoutDesc }}
  </div>
</template>

<script>
export default {
  props: {
    workoutDesc: String,
  },
  data() {
    return {
      apiDesc: [""],
    };
  },
};
</script>

<style>
</style>