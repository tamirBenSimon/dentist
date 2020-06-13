<template>
  <div class="contact-container">
    <h3>המקצועיות שלנו- הבריאות שלך</h3>
    <div class="call-to-action">אני רוצה להתייעץ עם המומחים</div>
    <span>הנבחרת</span>
    <h2>רופאי השיניים המומלצים של 2020</h2>
    <p>
      עם ותק ונסיון של עשרות שנים בתחום <br />המומחים שלנו יטפלו בך במקצועיות
      ואדיבות
    </p>

    <p>עם שיניים לא מהמרים ונלחמים על כל שן</p>
    <p>משאירים פרטים ומבקלים תוך שעה הצעה מחמשת רופאי השיניים המומלצים</p>
    <transition name="slide-fade">
            <div v-if="isShowMsg" class="formSentMSG">
        <h3>מעולה! הפרטים נשלחו בהצלחה</h3>
        <img src="success.png" alt="dv" />
      </div>
      <form v-if="isShowForm" >
        <label for="fullName">
          <h4>שם מלא</h4>
          <input type="text" v-model="fullName" />
        </label>
        <label for="phone">
          <h4>טלפון</h4>
          <input type="text" v-model="phone" />
        </label>
        <label for="email">
          <h4>דואר אלקטרוני</h4>
          <input type="text" v-model="email" />
        </label>
        <label for="request">
          <h4>מה הטיפול המבוקש? (לא חובה לענות)</h4>
          <input type="text" v-model="request" />
        </label>
        <button @click.prevent="onSend" class="call-to-action">שליחת פרטים</button>
      </form>
    </transition>
  </div>
</template>
<script>
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
    };
  },
  computed: {
    isShowForm() {
      return this.showForm;
    },
        isShowMsg() {
      return this.showMsg;
    }
  },
  methods: {
    onSend() {
      console.log("onsend", this.showForm)
      if(this.showForm){
        this.showForm=false;
      setTimeout(()=>{
        this.showMsg=true
      }, 701)
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  text-align: center;
}
.contact-container h3 {
  margin: 8px 0px 3px;
  font-size: 11px;
  line-height: 14px;
  color: #333333;
}
.contact-container .call-to-action {
  letter-spacing: 0.1rem;
  display: inline-block;
  width: 60%;
  padding: 3px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  background-color: #ffa14a;
  color: #f5f5f5;
  margin: 0px 0px 23px;
}

.contact-container span {
  display: block;
  font-weight: bolder;
  font-size: 16px;
  line-height: 20px;
  color: #5b5858;
}
.contact-container h2 {
  margin: 0px 0px 18px;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  color: #5b5858;
}

.contact-container p {
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  margin: 6px;
  color: #5b5858;
}

.contact-container form {
  height: 360px;
  width: 230px;
  margin: 0 auto;
  padding: 6px 0px;
}

.contact-container h4 {
  margin: 0px;
  font-size: 11px;
  line-height: 14px;
  text-align: right;
  color: #333333;
}

.contact-container input {
  width: 100%;
  height: 36px;
  background: #ffffff;
  border: 2px solid #ffa14a;
  box-sizing: border-box;
  margin-bottom: 18px;
  font-size: 11px;
  line-height: 14px;
  color: #5b5858;
}
.contact-container button.call-to-action {
  border: none;
  width: 100%;
  height: 37px;
  letter-spacing: 0.08rem;
  font-size: 14px;
}

.formSentMSG{
  height: 360px;
}
.formSentMSG h3 {
  font-size: 18px;
  line-height: 53px;
  color: #5b5858;
  text-align: center;
  color: #5b5858;
}

</style>
