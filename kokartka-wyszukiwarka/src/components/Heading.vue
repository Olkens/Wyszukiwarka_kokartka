<template>
  <div class="box-cont">
    <div class="">
      <!-- <label for="group">GRUPA</label> -->
      <select name="grupa" id="group" v-model="this.grupa">
        <option value="grupa" selected disabled hidden>Grupa</option>
        <option value="mucha">mucha</option>
        <option value="kokartka">kokartka</option>
      </select>
    </div>
    <div class="box">
      <select name="level" id="level" v-model="this.level">
        <option value="podstawowy">Podstawowy</option>
        <option value="advanced">zaawansowany</option>
      </select>
    </div>
    <div class="box">
      <p>WIEK</p>
    </div>
    <div class="box">SZKOŁA</div>
    <div class="box">DZIEŃ</div>
    <div class="box">GODZINA</div>
    <button @click="showModel">Filtruj</button>
  </div>
</template>

<script>
export default {
  emits: ["show-model"],
  props: ["level", "grupa"],
  data() {
    return {
      level: "",
      age: "",
      grupa: "",
    };
  },
  methods: {
    showModel() {
      this.emitter.emit("filterProps", { level: this.level, grupa: this.grupa });
      // this.$emit("show-model", this.level, this.grupa);
    },
  },
};
</script>

<style>
.box {
  width: 150px;
  height: 50px;
  background: #2e3a59;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: #fff;
}

.box-cont {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 25px;
}

select {
  width: 150px;
  height: 50px;
  background: #2e3a59;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  text-align: center;
}

option {
  padding: 5px;
}
</style>