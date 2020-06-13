<template>
  <div id="app">
    <headNav></headNav>
    <middle-bar></middle-bar>

    <review></review>
    <contact-container></contact-container>
    <footer>
      <p>
        הפרטים באתר לא נשמרים לצד ג' מלבד לנבחרת הרופאים המומלצים של 2020 כפי
        שדורגו בחודשים ינואר-יוני 2020
      </p>
      <P>
        אתר זה נבנה ע"י מערכת בניית האתרים של שירות sitesrus.co.il פיתוח עמודי
        נחיתה
      </P>
      <p>
        כל הזכויות שמורות
      </p>
    </footer>
  </div>
</template>

<script>
import headNav from "./components/head-nav";
import middleBar from "./components/middle-bar";
import review from "./components/review";
import contactContainer from "./components/contact-container";

export default {
  name: "App",
  components: {
    headNav,
    middleBar,
    review,
    contactContainer,
  },
};
</script>

<style>
#app {
}
footer {
  padding: 15px 0;
  width: 100%;
  background: #c4c4c4;
}
footer p {
  width: 275px;
  margin: 0 auto;
  font-size: 11px;
  line-height: 14px;
  text-align: right;
  color: #a3a1a1;
  margin-bottom: 20px;
}
</style>
