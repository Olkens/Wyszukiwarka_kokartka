<template>
  <div class="box-cont">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  width: 150px;
  height: 50px;
  background: red;
}
.box-cont {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 25px;
}
</style>