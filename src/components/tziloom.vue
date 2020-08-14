<template>
  <div class="middle-bar2">
    <div class="tziloom grid-container">
      <h2>צילום קווי ביוב</h2>
      <ul>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>צילום קווי ביוב רובוטי</span>
        </li>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>נסיון 30 שנה בעבודה עם קווי ביוב</span>
        </li>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>מענה מיידי לקריאות באזורי השירות</span>
        </li>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span> טכנולוגיות מתקדמות, ביצוע מקצועי ואיכותי</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import logEventsService from "../services/logEventsService";
export default {
  name: "tziloom",
  data() {
    return {};
  },
  methods: {
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
  },
};
</script>

<style scoped>
.truck-logo {
  height: 1rem;
  margin-inline-end: 25px;
}
.middle-bar2 {
  text-align: right;
    margin-bottom: 4rem;

}
.middle-bar2 h2 {
  line-height: 3rem;
  padding-inline-start: 1rem;
  margin: 0;
  margin-top: -5px;
  background: rgb(233, 233, 240);
  background: linear-gradient(
    23deg,
    rgba(233, 233, 240, 0.7871287128712872) 3%,
    rgba(149, 160, 196, 1) 22%,
    rgba(11, 23, 66, 1) 95%
  );
  color: white;
}

.stimot p {
  font-size: 0.85rem;
}
.tziloom ul {
  list-style-type: none;
}

.middle-bar2-call-to-action {
  background: rgba(0, 72, 255, 0.664);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  border: none;
  width: 80%;
  max-width: 340px;
  margin: 1.9rem 3rem 1rem;
  padding: 7px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
}
</style>
