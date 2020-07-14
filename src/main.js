import Vue from "vue";
import VueRouter from "vue-router";
import PulseTemplate from "./directives/PulseTemplate";
import Pulse from "./directives/Pulse";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.directive("pulse", Pulse);
new Vue({
  render: (h) => h(PulseTemplate),
}).$mount("#app");
