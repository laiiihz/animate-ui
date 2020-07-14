<template>
  <page-padding>
    <a-h :dark="dark">字体</a-h>
    <a-h h="2" :dark="dark">字体下载安装</a-h>
    <a-h h="3" :dark="dark"
      >推荐使用<a-link
        :dark="dark"
        type="primary"
        href="https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKsc-hinted.zip"
        >Noto Sans<i class="material-icons">link</i></a-link
      >
    </a-h>

    <code-block
      type="http"
      a-data="https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKsc-hinted.zip"
      :dark="dark"
    >
    </code-block>
    <a-h h="2" :dark="dark">Font Family</a-h>
    <code-block type="css" :a-data="fontFamily" :dark="dark"></code-block>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
import CodeBlock from "../components/CodeBlock";
import darkMixin from "../mixins/darkMixin";
export default {
  name: "FontPage",
  components: { CodeBlock, PagePadding },
  mixins:[darkMixin],
  data: () => ({
    fontFamily: `font-family:"Noto Sans CJK SC Regular","Microsoft YaHei","微软雅黑",Arial,sans-serif;`,
  }),
};
</script>

<style scoped></style>
