<template>
  <div class="box-cont">
    <div class="box flex-label">
      <label for="group">GRUPA</label>
      <select name="grupa" id="group" v-model="this.fGroup">
        <option value="grupa" selected disabled hidden>Grupa</option>
        <option value="mucha">mucha</option>
        <option value="kokartka">kokartka</option>
      </select>
    </div>
    <div class="box flex-label">
      <label for="level">LEVEL</label>
      <select name="level" id="level" v-model="this.fLevel">
        <option value="podstawowy">Podstawowy</option>
        <option value="advanced">zaawansowany</option>
      </select>
    </div>
    <div class="box flex-label">
      <label for="age">WIEK</label>
      <select name="age" id="age" v-model="this.fAge">
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    </div>
    <div class="box flex-label">
      <label for="day">DZIEŃ</label>
      <select name="day" id="day" v-model="this.fDay">
        <option value="poniedziałek">Poniedziałek</option>
        <option value="wtorek">Wtorek</option>
      </select>
    </div>
    <div class="box flex-label">
      <p>WIEK</p>
    </div>
    <div class="box flex-label">SZKOŁA</div>

    <div class="box flex-label">GODZINA</div>
    <button @click="showModel">Filtruj</button>
    <button @click="filterButton">Filt</button>
  </div>
</template>

<script>
export default {
  emits: ["show-model"],
  // props: ["fLevel", "fGrupa"],
  data() {
    return {
      fLevel: "",
      fAge: "",
      fGroup: "",
      fDay: "",
    };
  },
  methods: {
    showModel() {
      this.emitter.emit("filterProps", {
        filterLevel: this.fLevel,
        filterGroup: this.fGroup,
        filterAge: this.fAge,
        filterDay: this.fDay,
      });
      // this.$emit("show-model", this.level, this.grupa);
      // this.$refs.filterTable();
    },
    filterButton() {
      this.emitter.on("filterButton", filterTable());
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

.flex-label {
  display: flex;
  flex-direction: column;
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