<template>
  <div id="app">
    <head-nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </head-nav>
  <middle-bar>
  </middle-bar>
  <stimot></stimot>
  <tziloom></tziloom>
    <hitooh></hitooh>
    <henion></henion>
   <reviews-section>
  </reviews-section>
  </div>
</template>

<script>
import headNav from './components/head-nav'
import middleBar from './components/middle-bar'
import middleBar2 from './components/middle-bar2'
import reviewsSection from './components/reviews-section'
import stimot from './components/stimot'
import tziloom from './components/tziloom'
import hitooh from './components/hitooh'
import henion from './components/henion'

export default {
  name: 'app',
  components: {
    headNav,
    middleBar,
    middleBar2,
    reviewsSection,
    stimot,
    tziloom,
    hitooh,
    henion
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
