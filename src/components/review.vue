<template>
  <div class="review">
    <img class="rev-face" src="rev-face.jpg" alt="" />
    <p>
      החוויה שלי במרפאת השיניים של המומחים, שינתה אצלי את חווית הטיפול במרפאת
      שיניים אחרי לא מעט טיפולים ורופאים שהכרתי הגעתי למרפאה דרך האתר, פגשתי
      צוות מקצועי, קשוב וסבלני, שחווית המטופל חשובה לו לא פחות מהטיפול המקצועי
      והשימוש בשיטות חדשניות. ללא נדיפות, ללא ביקורת, רק ענייניות.
    </p>
    <div class="stars-container">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>


  </div>
</template>

<script>
export default {
  name: "review",
};
</script>

<style scoped>
.review {
  padding: 10px 0;
  text-align: center;
  background: #ffe4cc;
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
.stars-container{
    margin: 13px 0px 0px;
}
</style>
