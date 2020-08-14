<template>
  <div class="middle-bar2">
    <div class="stimot grid-container">
      <h2>פתיחת סתימות בלחץ מים גבוה 24/7</h2>
      <p>
        הביוב עולה על גדותיו? סתימה הפכה לסיוט? ביובית שלנו במרחק קריאה ממכם!<br />
        עם נסיון של 30 שנות עשייה, צוות מקצועי עומד לרשותכם בכל שעות היממה
      </p>

      <p>
        במערכות הביוב שבבית שלנו ובבניין, זורמים מסביב לשעון מי שופכין המהווים
        קרקע פוריה להתפתחות חיידקים ומזיקים.
        <br />
        כשהביוב שלנו נסתם, הזנחה תוביל להצפות, סדקים ושברים דרכם נוזלים מי
        השופכין מהביוב החוצה. מעבר לפגיעה האסטתית, ביוב סתום הוא סכנה של ממש
        <br />
        בירון ביוביות אנו עובדים עם הכלים המתקדמים ביותר בדגש על חזרה לשגרה
        בהקדם מבחינת הלקוח
      </p>
      
      <video class="video1" src="video1.mp4" controls></video>
      <a class="middle-bar2-call-to-action vibrate-1" :href="`tel:+${mobile}`">
        צלצלו אלינו עכשיו
      </a>
      <ul>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>פתיחת סתימות בלחץ מים גבוה</span>
        </li>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>פתיחת כל סוגי הסתימות</span>
        </li>
        <li>
          <img src="trucklogo.png" class="truck-logo" alt="as" />
          <span>שטיפת קווי ביוב</span>
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
  name: "stimot",
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

.stimot ul {
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
.video1 {
  display: block;
  margin-bottom: 0.85rem;
  height: 400px;
  width: 300px;
  outline: none;
}
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
