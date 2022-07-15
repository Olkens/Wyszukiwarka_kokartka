<template>
  <div class="box-cont">
    <div class="">
      <!-- <label for="group">GRUPA</label> -->
      <select name="group" id="group">
        <option value="grupa">Grupa</option>
        <option value="mucha">mucha</option>
        <option value="kokartka">kokartka</option>
      </select>
    </div>
    <div class="box"><p>POZIOM</p></div>
    <div class="box"><p>WIEK</p></div>
    <div class="box">SZKOŁA</div>
    <div class="box">DZIEŃ</div>
    <div class="box">GODZINA</div>
  </div>
</template>

<script>
export default {};
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