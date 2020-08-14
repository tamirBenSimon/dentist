<template>
  <div class="middle-bar">
    <img class="hero" src="hero1.png" alt="" />

    <div class="middle-bar-titles">
      <div class="title-area">
        <h2>ירון ביוביות - שירותי ביובית מתקדמים בהתראה מיידית</h2>
        <h2>נתקעת? הביוב עולה? פתיחת סתימות 24 שעות ביממה</h2>
        <h2>חיתוך שורשים מקצועי עם דיזה</h2>
        <h2>צילום קווי ביוב בעזרת מצלמת ביוב</h2>
        <h2>צוות מיומן עם 30 שנות נסיון באינסטלציה ועבודות ביוב</h2>
        <h2>בתים פרטיים, מוסדות ובניינים</h2>
      </div>

      <div class="cards-container">
        <service-card
          v-for="(service, idx) in services"
          :key="idx"
          :txt="services[idx].txt"
          :cardClass="services[idx].cardClass"
        >
        </service-card>
      </div>
    </div>
  </div>
</template>

<script>
import serviceCard from "./service-card";
export default {
  name: "head-nav",
  data() {
    return {
      bgImage: "hero.png",
      services: [
        {
          txt: "פתיחת סתימות 24/7",
          cardClass: "fas fa-hand-holding-water white",
        },
        { txt: "חיתוך שורשים בדיזה", cardClass: "fas fa-cut white" },
        { txt: "צילום קווי ביוב", cardClass: "fas fa-camera-retro white" },
        {
          txt: "ביובית נמוכה לחניונים",
          cardClass: "fas fa-truck-moving white",
        },
      ],
    };
  },
  components: {
    serviceCard,
  },
};
</script>

<style scoped>
.middle-bar {
  position: relative;
  margin-top: 80px;
  
}
.hero {
  width: 100%;
  height: 460px;
  object-fit: cover;
}
.middle-bar-titles {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 2rem 0px 0px;
  height: 197px;
  text-align: right;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(28,28,29);
background: linear-gradient(180deg, rgba(28,28,29,0.7871287128712872) 7%, rgba(155,174,240,0) 95%);
  
}


.middle-bar-titles h2 {
  margin: 0;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 22px;
  color: #141d34;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}


.cards-container {
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2vw;
}

.title-area h2 {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}
.title-area h2:nth-child(6) {
  margin-bottom: 1rem;
}

@media only screen and (max-width: 700px) {
  .title-area h2 {
    padding: 0px 10px;
    font-size: 0.85rem;
    line-height: 1rem;
  }

  .title-area h2:nth-child(5) {
    margin-bottom: 1rem;
  }
  .hero {
    height: 420px;
  }
}
</style>
