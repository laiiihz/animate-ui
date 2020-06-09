import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
  },
  mutations: {
    changeDarkMode(state) {
      state.dark = !state.dark;
      window.localStorage.setItem("darkMode", state.dark.toString());
      console.log(state.dark);
    },
    changeDarkModeValue(state, value) {
      state.dark = value;
    },
  },
  actions: {},
  modules: {},
});
