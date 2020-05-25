import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AnimateUI from 'animate-ui'
import 'animate-ui/dist/animate-ui.css'

Vue.config.productionTip = false
Vue.use(AnimateUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
