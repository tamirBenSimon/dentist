<template>
  <div class="head-nav">
    <h3>ההחלטה הנכונה לחיוך שלך</h3>
    <span class="head-nav-call-to-action">אני רוצה לקבל הצעה</span>
  </div>
</template>

<script>
export default {
  name: "head-nav",
};
</script>

<style scoped>
.head-nav {
  z-index: 9;
  background-color: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 36px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}

.head-nav-call-to-action {
  background-color: #ffae62;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 12px;
  text-align: center;
  padding: 6px 10px;
  color: #f5f5f5;
}

.head-nav h3 {
  font-weight: bolder;
  font-size: 11px;
  line-height: 14px;
}
</style>
