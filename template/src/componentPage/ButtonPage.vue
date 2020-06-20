<template>
  <page-padding>
    <a-h :dark="dark">按钮</a-h>
    <a-h :h="2" :dark="dark">类型</a-h>
    <a-button v-for="item in types" :type="item" :key="`${item}default`">
      {{ item }}
    </a-button>
    <code-preview
      :dark="dark"
      :value-object="defaultCode.default"
    ></code-preview>
    <a-h h="2" :dark="dark">Icon</a-h>
    <a-button icon="face"></a-button>
    <a-button icon="face" circle></a-button>
    <code-preview :dark="dark" :value-object="defaultCode.icon"></code-preview>
    <a-h h="2" :dark="dark">圆角</a-h>
    <a-button round>Round</a-button>
    <code-preview :dark="dark" :value-object="defaultCode.round"></code-preview>
    <a-h h="2" :dark="dark">Dash</a-h>
    <a-button dash>Dash</a-button>
    <code-preview :dark="dark" :value-object="defaultCode.dash"></code-preview>
    <a-h h="2" :dark="dark">文字</a-h>
    <a-button text>Text</a-button>
    <a-h h="2" :dark="dark">暗黑模式</a-h>
    <a-button v-for="item in types" dark :type="item" :key="`${item}dark`">
      {{ item }}
    </a-button>
    <code-preview
      :dark="dark"
      :value-object="defaultCode.darkMode"
    ></code-preview>
    <API :dark="dark" :value-object="buttonAPI">test</API>
  </page-padding>
</template>

<script>
import PagePadding from "../page/PagePadding";
import CodePreview from "../components/CodePreview";
import API from "../components/API";
import buttonValue from "../componentsValue/button";
import buttonTemplates from "../componentsTemplateValue/button";
export default {
  name: "ButtonPage",
  components: { API, CodePreview, PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  data: () => ({
    types: ["default", "primary", "info", "warn", "danger"],
    defaultCode: buttonTemplates,

    buttonAPI: {
      Props: buttonValue,
      Events: [
        {
          name: "Click",
          des: "点击事件",
        },
      ],
    },
  }),
};
</script>

<style scoped></style>
