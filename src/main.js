import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import './plugins/element.js'


Vue.config.productionTip = false
Vue.use(vueSmoothScroll)


// eslint-disable-next-line
new Vue({
  render: h => h(App),
}).$mount('#app')
