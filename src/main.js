import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
