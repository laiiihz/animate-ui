<template>
  <page-padding>
    <a-h :dark="dark">按钮</a-h>
    <a-h :h="2" :dark="dark">类型</a-h>
    <a-button v-for="item in types" :type="item" :key="`${item}default`">
      {{ item }}
    </a-button>
    <code-preview
      :dark="dark"
      :html="defaultCode.html"
      :js="defaultCode.js"
    ></code-preview>
  </page-padding>
</template>

<script>
import PagePadding from "../page/PagePadding";
import CodePreview from "../components/CodePreview";
export default {
  name: "ButtonPage",
  components: { CodePreview, PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  data: () => ({
    types: ["default", "primary", "info", "warn", "danger"],
    defaultCode: {
      html: `<a-button v-for="item in types" :type="item" :key="\`\${item}default\`">
      {{ item }}
    </a-button>`,
      js: `data: () => ({
          types: ["default", "primary", "info", "warn", "danger"],
      )}`,
    },
  }),
};
</script>

<style scoped></style>
