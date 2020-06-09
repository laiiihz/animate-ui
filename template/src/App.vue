<template>
  <div id="app">
    <a-app :dark="$store.state.dark">
      <a-header :dark="$store.state.dark" fixed blur dense under-round>
        Animate UI
        <template slot="leading">
          <a-button icon="face" text></a-button>
        </template>
        <template slot="menu">
          <a-button text icon="home" to="Home">Home</a-button>
          <a-button text icon="dashboard" to="ComponentView"
            >Components</a-button
          >
          <a-button text icon="face" to="About">About</a-button>
          <a-button text icon="brightness_2" @click="handleDarkMode"
            >DarkMode</a-button
          >
        </template>
      </a-header>
      <a-container
        :padding="{
          xs: 0,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }"
      >
        <transition name="slide-x" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-container>
    </a-app>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    handleDarkMode() {
      this.$store.commit("changeDarkMode");
    },
  },
  mounted() {
    this.$store.commit(
      "changeDarkModeValue",
      window.localStorage.getItem("darkMode") === "true"
    );
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
