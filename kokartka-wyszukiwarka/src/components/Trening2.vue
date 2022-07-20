<template>
  <div class="app-tr-container">
    <div
      class="tr-main-container"
      v-for="trening in trenings"
      :key="trening.id"
    >
      <div class="tr-info-box-1">
        <div class="tr-info-1">
          <div class="tr-info-1-box">
            <div>
              <p class="faded-title">POZIOM</p>
              <p>{{ trening.poziom }}</p>
            </div>
            <div>
              <p class="faded-title">Szkoła</p>
              <p>{{ trening.szkola }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-info-box-2 tr-info-box-2-grid">
        <div class="tr-info-2">
          <div class="tr-info-2-box tr-border-left">
            <div>
              <p class="faded-title">Wiek</p>
              <p>{{ trening.wiek }}</p>
            </div>
            <div>
              <p class="faded-title">Dzień</p>
              <p>Wtorek</p>
            </div>
          </div>
        </div>
        <div class="tr-info-3">
          <div class="tr-info-3-box tr-border-left">
            <div>
              <p class="faded-title">Godzina</p>
              <p>16:30</p>
            </div>
            <div>
              <p class="faded-title">GRUPA</p>
              <p>KOKARTKA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-btn-container">
        <a class="tr-btn tr-btn-wi" href="#">Więcej Informacji</a>
        <a class="tr-btn tr-btn-zs" href="#"> Zapisz się</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trenings: [
        {
          id: 1,
          poziom: "zaawansowany",
          wiek: 14,
          szkola: "Gdańsk",
        },
        {
          id: 2,
          poziom: "podstawowy",
          wiek: 16,
          szkola: "Gdynia",
        },
        {
          id: 3,
          poziom: "podstawowy",
          wiek: 7,
          szkola: "Gdynia",
        },
        {
          id: 4,
          poziom: "podstawowy",
          wiek: 12,
          szkola: "Gdynia",
        },
      ],
    };
  },
};
window.onload = function () {
  const mainCont = document.querySelectorAll(".tr-main-container");
  console.log(mainCont);

  for (let i = 0; i < mainCont.length; i++) {
    console.log(mainCont[i]);
    if (i % 2 != 0) {
      mainCont[i].classList.add("tr-main-container-second-bgcolor");
    }
  }
};
</script>

<style>
.tr-main-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 0fr);
  max-width: 348px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 10px;
  height: 137px;
  background-color: #1a1d27;
  text-transform: uppercase;
}

.tr-main-container-second-bgcolor {
  background-color: #2c303d !important;
}

.tr-info-box-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.tr-info-1-box,
.tr-info-2-box,
.tr-info-3-box {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.tr-info-box-2 {
  grid-area: 1 / 2 / 2 / 3;
}

.tr-border-left {
  border-left: 1px solid gray;
  padding-left: 25px;
}

.tr-btn-container {
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
}

.tr-info-box-2-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.tr-info-2 {
  grid-area: 1 / 1 / 2 / 2;
}
.tr-info-3 {
  grid-area: 1 / 2 / 2 / 3;
}

.tr-btn {
  width: 146px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: bold;
  padding: 2px;
}

.tr-btn-wi {
  color: #fff;
}

.tr-btn-zs {
  background: #fff;
  color: #000;
}

.faded-title {
  color: #616a89;
}
</style>