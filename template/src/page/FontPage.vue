<template>
  <page-padding>
    <h1>字体</h1>
    <h2>字体下载安装</h2>
    <h3>推荐使用Noto Sans</h3>
    <code-block
      type="http"
      data="https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKsc-hinted.zip"
    >
    </code-block>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
import CodeBlock from "../components/CodeBlock";
export default {
  name: "FontPage",
  components: { CodeBlock, PagePadding },
};
</script>

<style scoped></style>
