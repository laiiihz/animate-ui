<template>
  <div id="app">
    <a-header fixed blur>
      Animate UI
      <template slot="leading">
        <a-button icon="face" text></a-button>
      </template>
      <template slot="menu">
        <a-button text to="Home">Home</a-button>
        <a-button text @click="onclick">Components</a-button>
        <a-button text>About</a-button>
      </template>
    </a-header>
    <router-view></router-view>
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
