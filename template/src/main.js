import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AnimateUI from "animate-ui";
import "animate-ui/dist/animate-ui.css";
import highlight from "./plugins/highlight";

Vue.config.productionTip = false;
Vue.use(AnimateUI);
Vue.use(highlight);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
