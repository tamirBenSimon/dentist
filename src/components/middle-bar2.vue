<template>
  <div class="middle-bar2">
    <div class="cavits-container">
      <div v-for="(miniTitle, idx) in miniTitles" :key="miniTitle"
      class="miniTitle-container">
      <img src="cavity2.png" class="cavity-img" alt="">
      <span class="miniTitle-txt">
        {{miniTitle}}
      </span>
      </div>
    </div>

          <a
      @click="onGoToForm"
      href="#contact-container"
      v-smooth-scroll="{ offset: -55 }"
      class="middle-bar2-call-to-action"
    >
      <button class="middle-bar2-call-to-action">
        לקבלת הצעה
      </button>    </a>
  </div>
</template>

<script>
import logEventsService from "../services/logEventsService";
export default {
  name: "head-nav",
  data() {
    return {
      miniTitles:[
        "מחיר שפוי",
        "רופאים מומחים",
        "עזרה ראשונה"
]

    };
  },
methods:
{
      onGoToForm() {
      // httpService.post("/log-events", {
      //   url: window.location.href,
      //   name: "goToForm",
      //   vertical: "dentist",
      //   hostname: window.location.hostname,
      //   referrer: document.referrer,
      // });
      logEventsService.newLog("goToForm");
    },
}
};
</script>

<style scoped>

.middle-bar2{
  text-align: center;
}
.cavits-container{
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 300px;
  margin: 70px auto 0;
}
.miniTitle-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cavity-img{
  width: 51px;
  height: 49px;
}
.miniTitle-txt{
font-size: 12px;
line-height: 1.25rem;
text-align: center;
text-indent: 2px;
}


.middle-bar2-call-to-action{
  background: rgba(0, 71, 255, 0.93);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: white;
border: none;
width: 90%;
max-width: 340px;
margin: 1.9rem auto 1rem;
padding: 7px;
font-weight: 600;
font-size: 1.1rem;
text-decoration: none;
}
</style>
