<template>
  <page-padding>
    <a-h :dark="dark">安装</a-h>
    <a-h h="2" :dark="dark">npm 安装</a-h>
    <code-block :dark="dark" type="bash" :a-data="npm"></code-block>
    <a-h h="2" :dark="dark">CDN加速</a-h>
    <code-block :dark="dark" type="html" :a-data="cdn"></code-block>
    <a-alert
      type="info"
      title="建议生产环境使用CDN方式部署"
      :closable="false"
    ></a-alert>
  </page-padding>
</template>

<script>
import CodeBlock from "../components/CodeBlock";
import PagePadding from "./PagePadding";
export default {
  name: "InstallPage",
  components: { PagePadding, CodeBlock },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  data: () => ({
    npm: "npm install animate-ui@latest",
    cdn:
      "<" +
      `!--样式-->
<link rel="stylesheet" href="https://unpkg.com/animate-ui/dist/animate-ui.css">
<` +
      `!--组件-->
<script src="https://unpkg.com/animate-ui/dist/animate-ui.common.js"><` +
      "/script>",
  }),
};
</script>

<style scoped></style>
