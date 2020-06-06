<template>
  <padding-top-view>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="width: 100%; height: 100px; background-color: #42a5f5;"></div>
    <div style="height: 200px;"></div>
  </padding-top-view>
</template>

<script>
// @ is an alias to /src
import PaddingTopView from "./PaddingTopView";

export default {
  name: "Home",
  components: {
    PaddingTopView,
  },
};
</script>
