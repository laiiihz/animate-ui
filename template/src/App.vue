<template>
  <div id="app">
    <a-header fixed blur dense under-round>
      Animate UI
      <template slot="leading">
        <a-button icon="face" text></a-button>
      </template>
      <template slot="menu">
        <a-button text icon="home" to="Home">Home</a-button>
        <a-button text icon="dashboard" to="ComponentView">Components</a-button>
        <a-button text icon="face" to="About">About</a-button>
      </template>
    </a-header>
    <transition name="slide-x" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    onclick() {
      this.$router.push({ name: "ComponentView" });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
