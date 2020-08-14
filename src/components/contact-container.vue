<template>
  <div id="contact-container" class="contact-container">
    <span class="subtitle1">נבחרת המומחים</span>
    <h2>רופאי השיניים המומלצים של 2020</h2>
    <span class="subtitle2">פשוט - עם שיניים לא מהמרים!</span>
    <p>
      משאירים עכשיו פרטים ותוך שעה מקבלים הצעה מנבחרת של רופאי השיניים המומלצים
      של 2020
    </p>
    <transition name="slide-fade">
      <div v-if="isShowMsg" class="formSentMSG">
        <h3>מעולה! הפרטים נשלחו בהצלחה</h3>
        <img src="success.png" alt="dv" />
      </div>
      <form v-if="isShowForm">
        <label for="fullName">
          <h6>שם מלא</h6>
          <input type="text" v-model="fullName" required />
        </label>
        <label for="phone">
          <h6>טלפון</h6>
          <input type="number" ref="phone" v-model="phone" required />
          <div v-if="isModalOn" class="require-modal shake-horizontal">
            מספר טלפון הינו שדה חובה להשלמת הפנייה
            נא למלא מספרים בלבד
          </div>
        </label>
        <!-- <label for="email">
          <h6>דואר אלקטרוני</h6>
          <input type="email" v-model="email" required />
        </label> -->
        <label for="request">
          <h6>מה הטיפול המבוקש? (לא חובה לענות)</h6>
          <textarea class="form-textarea" resize="disabled"></textarea>
        </label>
        <button @click.prevent="onSend" class="call-to-action">
          שליחת פרטים
        </button>
      </form>
    </transition>
  </div>
</template>
<script>
import logEventsService from "../services/logEventsService";

export default {
  name: "contact-container",
  data() {
    return {
      fullName: "",
      phone: null,
      email: "",
      request: "",
      showMsg: false,
      showForm: true,
      isModalOn: false,
    };
  },
  computed: {
    isShowForm() {
      return this.showForm;
    },
    isShowMsg() {
      return this.showMsg;
    },
  },
  methods: {
    onSend() {
      // log this click on  form button to elasticSearch
      logEventsService.newLog("leadSubmitClick");
      // validate required fields
      if (!this.phone) {
        this.isModalOn = true;
        this.$refs["phone"].focus();
        return;
      } else {
        // validated form submited =>
        // report this   form button to google
        gtag("event", "conversion", {
          send_to: "AW-627103330/MA8aCLPN69MBEOKsg6sC",
          transaction_id: "",
        });
        // log this validated lead to elasticSearch
        logEventsService.newLog("newLead", {
          phone: this.phone,
          fullName: this.fullName,
          email: this.email,
          msg: this.request,
        });
      }
      if (this.showForm) {
        this.showForm = false;
        setTimeout(() => {
          this.showMsg = true;
        }, 701);
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  text-align: center;
  height: 657px;
}

.contact-container .subtitle1 {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* text-align: center; */
  color: #141d34;
}

.contact-container h2 {
  margin: 0px 0px 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #141d34;
}

.contact-container .subtitle2 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 180px;
  color: #5b5858;
}

.contact-container p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #141d34;
  max-width: 44ch;
  margin: 1.1rem auto 29px;
}

.contact-container form {
  height: 445px;
  width: 86vw;
  margin: 0 auto;
  padding: 6px 0px 0px;
}

.contact-container h6 {
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 1.1rem;
  text-align: right;
  color: #20233c;
  margin-inline-start: 5px;
}

.contact-container input {
  outline: none;
  padding: 7px;
  width: 100%;
  height: 36px;
  border: 2px solid rgba(0, 71, 255, 0.2);
  margin-bottom: 18px;
  font-size: 0.8rem;
  line-height: 14px;
  color: #5b5858;
}
.contact-container input:hover,
.contact-container input:focus,
.contact-container textarea:focus,
.contact-container textarea:hover {
  -webkit-box-shadow: 1px 1px 7px 3px rgba(0, 71, 255, 0.2);
  -moz-box-shadow:1px 1px 7px 3px rgba(0, 71, 255, 0.2);
  box-shadow: 1px 1px 7px 3px rgba(0, 71, 255, 0.2);
}

.form-textarea {
  outline: none;
  padding: 7px;
  width: 86vw;
  height: 144.63px;
  border: 2px solid rgba(0, 71, 255, 0.2);
  font-size: 11px;
  line-height: 14px;
  color: #5b5858;
  font-size: 0.8rem;
}

.contact-container button.call-to-action {
  margin: 18px auto 0px;
  background: #0047FF;;
  border: none;
  width: 100%;
  height: 37px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #f5f5f5;
}

.formSentMSG {
  height: 360px;
}
.formSentMSG h3 {
  font-size: 18px;
  line-height: 53px;
  color: #5b5858;
  text-align: center;
  color: #5b5858;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.require-modal {
  margin-bottom: 1rem;
  text-align: right;
  font-size: 0.65rem;
  color: red;
}
</style>
