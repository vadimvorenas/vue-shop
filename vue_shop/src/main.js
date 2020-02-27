import Vue from 'vue'
import App from './App.vue'
import './assets/style/style.scss'
import store from './vuex/store'
import router from './route/router'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
