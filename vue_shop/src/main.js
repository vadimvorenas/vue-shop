import Vue from 'vue'
import App from './App.vue'
import './assets/style/style.scss'
import store from './vuex/store'
import router from './route/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
