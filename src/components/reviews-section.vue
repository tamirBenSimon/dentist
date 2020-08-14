<template>
  <div class="reviews-container">
    <h3 class="reviews-title">
      כשהשקט שלך באמת חשוב לנו יותר מהכל- ממליצים עלינו 
    </h3>
    <h4 class="reviews-sub-title">הנה רק חלק ממה שלקוחות אמרו עלינו</h4>

    <review
      v-for="(review, idx) in reviewsData"
      :key="idx"
      :reviewData="review"
    >
    </review>
    <iframe width="522" height="381" src="https://www.youtube.com/embed/95nmxozUQ2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
import review from "./review";

export default {
  name: "reviews-section",
  data() {
    return {
      reviewsData: [
        {
          txt:
          "השעה 10 בלילה, שירותים בקומה העליונה  בהצפה היסטרית כנראה בגלל המגבונים. 20 דקות מרגע שניתקתי את הטלפון נחתה לי ביובית בחצר. אין מה להגיד, שיחקו אותה, טיפלו בהכול וסגרו יפה תיק תק. אלופים !",
          author: "ענת, רמת-גן",
        },
        {
          txt:
          "אנחנו עובדים עם ירון כבר כמה שנים. יש להם כלים רציניים והבנה של מקצוענים אמיתיים. אבל הכי חשוב לי - יש לי שם בן אדם שאני יכול לסמוך עליו",
          author: "אילן, אזור תעשייה נתניה",
        },
        {
          txt:"ירון יודע לעבוד. מקצועי, נותן תחושה של ביטחון שדואגים לך אנשים שמבינים הכי טוב",
          author: "שמעון, 50 חדרה",
        },
      ],
    };
  },
  components: {
    review,
  },
  // ,
  // computed:{
  //   getReviews(){
  //     console.log("in getREviewssssss", this.reviewsData)
  //     return this.reviewsData
  //   }
  // }
};
</script>

<style scoped>
.reviews-container {
  padding: 10px 0 6px;
  text-align: center;
}
.reviews-container .reviews-title {
  font-style: normal;
  width: 28ch;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #141d34;
  margin: 17px auto 0px;
}
.reviews-container .reviews-sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 24px;
  text-align: center;
  margin: 3px auto;
}

.rev-face {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.review p {
  width: 285px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #5b5858;
}
</style>
