<template>
  <div class="review-container">
    <img class="review-bcg-img" src="trucklogo.png" alt="as">


    <div class="stars-container">
      <img src="star.png" alt="ads" />
      <img src="star.png" alt="ads" />
      <img src="star.png" alt="ads" />
      <img src="star.png" alt="ads" />
      <img src="star.png" alt="ads" />
    </div>

    <p class="rev-txt">"{{ reviewData.txt }}"</p>


    <span class="review-author"> {{ reviewData.author }}</span>
  </div>
</template>

<script>
export default {
  name: "review",
  props: {
    reviewData: Object,
  },
};
</script>

<style scoped>
.review-container {
  position: relative;
  background: rgba(12, 47, 226, 0.089);
  border-radius: 10px;
  margin: 1rem auto;
  width: 96%;
  padding: 0.1rem 0.35rem 1.15rem ;
    margin-bottom: 24px;

}
.review-bcg-img{
  position: absolute;
  right: 2px;
  top: 10px;
  height: 131px;
  width: 136px;
  object-fit: contain;
  opacity: 0.12;
}
.rev-face {
  width: 55px;
  height: 53.6px;
  border-radius: 16px;
  margin-bottom: 24px;
}
.review-container p {
  /* width: 285px; */
  margin: 0 auto 1.7rem;
  padding: 0 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #5b5858;
  max-width: 40ch;
}
.stars-container {
  margin: 0.9rem 0px 0.95rem ;
}
.stars-container>*{
  width: 18px;
  height: 18px;
  margin: 0px 0.22rem;
}
.review-author{
font-size: 12px;
line-height: 16px;
text-align: center;
color: #5B5858;}
</style>
