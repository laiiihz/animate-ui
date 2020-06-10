<template>
  <page-padding>
    <a-h :dark="dark">阴影</a-h>
    <div v-for="item in 4" :key="item">
      <a-h :dark="dark" h="2">阴影高度:{{ item }}</a-h>
      <div class="shadow-div" :class="'shadow_height_' + item"></div>
      <code-preview :dark="dark" :html="getShadowHtml(item)"></code-preview>
    </div>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
import CodePreview from "../components/CodePreview";
export default {
  name: "ShadowPage",
  components: { CodePreview, PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  methods: {
    getShadowHtml(shadow) {
      return `<div class="shadow_height_${shadow}"></div>`;
    },
  },
};
</script>

<style scoped>
.shadow-div {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  background-color: dodgerblue;
  margin: 10px;
}
</style>
