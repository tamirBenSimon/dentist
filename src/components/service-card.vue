<template>
  <div class="service-card">
    <i class="service-card-i" :class="cardClass"> </i>
    <p >
      {{ txt }}
    </p>
  </div>
</template>

<script>
export default {
  name: "service-card",
  props: {
    txt: String,
    cardClass: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.service-card {
  padding: 0px 5px 1px;
  border-radius: 0.3rem;
  height: 120px;
  width: 150px;
  border: 1px solid rgba(255, 255, 255, 0.568);
  background-color: rgba(19, 14, 14, 0.384);
  display: flex;
  flex-direction: column;
  transition: all , .2s;
}

.service-card p{
  margin: 0;
  justify-self: flex-end;
  color: white;
  text-align: center;
  font-size: 1rem;
}
.service-card:hover{
  cursor: pointer;
  background-color: rgba(19, 14, 14, 0.678);
}
.white {
  color: rgba(255, 255, 255, 0.918);
}
.service-card-i{
  line-height: 5rem;
  margin: top 20px;
  align-self: center;
  font-size: 3.5rem;
  height: 50%;
  margin-bottom: 15px;
}



@media only screen and (max-width: 900px) {
  .service-card {
    width: 110px;
    height: 110px;
  }
  .service-card p{
    font-size:0.9rem;
    
  }
}
</style>
