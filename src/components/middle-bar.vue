<template>
  <div class="middle-bar">
    <img class="hero" src="hero.png" alt="" />
    <div class="middle-bar-titles">
      <span>הנבחרת</span>
      <h2>רופאי השיניים המומלצים של 2020</h2>
      <p>איך זה עובד?</p>
      <p>*משאירים פרטים</p>
      <p>*מקבלים הצעה מחמשת המומחים</p>
      <p>תוך שעה</p>
      <p>המומלצים ביותר שמצאנו לידך</p>
      <span class="call-to-action">לקבלת הצעה</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "head-nav",
};
</script>

<style scoped>
.middle-bar {
  height: 355px;
  position: relative;
}
.hero{
  width: 100%;
  height: 360px;
  object-fit: cover;
}
.middle-bar-titles {
  position: absolute;
  text-align: center;
  top:92px;
  width: 100%;
}

.middle-bar-titles span {
  font-weight: bolder;
  font-size: 16px;
  line-height: 20px;
  color: #5b5858;
}
.middle-bar-titles p {
  text-align: right;
  margin: 2px 46px;
  font-weight: bolder;
  font-size: 16px;
  line-height: 20px;
  color: #5b5858;
}
.middle-bar-titles p:last-of-type {
  margin-bottom: 30px;
}

.middle-bar-titles h2 {
  margin: 0;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  color: #5b5858;
}

.head-nav h3 {
  font-weight: bolder;
  font-size: 11px;
  line-height: 14px;
}

.middle-bar-titles span.call-to-action {
  background-color: #ffae62;
  font-weight: bolder;
  font-size: 0.625rem;
  line-height: 12px;
  text-align: center;
  padding: 10px 35px;
  color: #f5f5f5;
}
</style>
