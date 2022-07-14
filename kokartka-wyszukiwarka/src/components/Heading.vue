<template>
  <div class="box-cont">
    <div class="box"><p>GRUPA</p></div>
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
}
.box-cont {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 25px;
}
</style>