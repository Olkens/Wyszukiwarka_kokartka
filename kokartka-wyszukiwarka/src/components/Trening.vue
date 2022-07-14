<template>
  <Card>
    <div class="flex tr-container">
      <div class="flex tr-first-box">
        <div class="flex tr-box-info-container">
          <div class="tr-box-title-1">
            <div class="tr-box-title">
              <p>POZIOM</p>
              <p>lorem</p>
            </div>
            <div class="tr-box-title">
              <p>Szkoła</p>
              <p>lorem</p>
            </div>
          </div>
          <div class="flex tr-box-title-2">
            <div class="flex tr-box-info border-left">
              <div class="tr-box-title">
                <p>Wiek</p>
                <p>14</p>
              </div>
              <div class="tr-box-title">
                <p>Dzień</p>
                <p>Wtorek</p>
              </div>
            </div>
            <div class="flex tr-box-info border-left">
              <div class="tr-box-title">
                <p>GODZINA</p>
                <p>14</p>
              </div>
              <div class="tr-box-title">
                <p>GRUPA</p>
                <p>Kokartka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex tr-second-box">
        <div class="flex tr-btn-container">
          <a class="tr-btn tr-btn-wi" href="#">Więcej informacji</a>
          <a class="tr-btn tr-btn-zs" href="#">Zapisz się</a>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {};
</script>

<style>
.flex {
  display: flex;
}
.tr-container {
  /* flex: 2fr; */
  flex-direction: column;
  gap: 2rem;
  border: 1px solid grey;
  padding: 20px 25px;
  border-radius: 5px;
  max-width: 475px;
  justify-content: space-between;
  font-size: 12px;
  background: #2c303d;
}

.tr-box-title {
  display: flex;
  flex-direction: column;
}

.tr-box-title-2 {
  flex-direction: row;
  justify-content: space-between;
}

.tr-btn-container {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.tr-box-info-container {
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}

.tr-box-info {
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}

.border-left {
  border-left: 1px solid grey;
  padding-left: 25px;
}
</style>