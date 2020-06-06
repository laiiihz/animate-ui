<template>
  <padding-top-view>
    <a-row>
      <a-column :col="4">
        <div class="aside">1213</div>
      </a-column>
      <a-column :col="8">1</a-column>
    </a-row>
  </padding-top-view>
</template>

<script>
import PaddingTopView from "./PaddingTopView";
export default {
  name: "ComponentView",
  components: { PaddingTopView },
  data: () => ({
    windowHeight: "",
  }),
};
</script>

<style scoped>
.aside {
  background-color: #42a5f5;
  height: calc(100vh - 120px);
}
</style>
