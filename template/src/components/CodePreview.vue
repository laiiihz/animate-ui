<template>
  <div
    @mouseenter="updateHeight"
    @mouseleave="mouseLeave"
    ref="previewRef"
    :class="['code-preview', { 'is-out-dark': dark }]"
  >
    <a-button
      v-for="item in codeTypes"
      :key="item"
      text
      :dark="dark"
      @click="clickBlock(item)"
      >{{ item }}</a-button
    >
    <transition name="slide-x" mode="out-in">
      <code-block
        ref="blockRef"
        :key="this.current"
        :type="this.current"
        :a-data="this.value"
        :dark="dark"
      ></code-block>
    </transition>
  </div>
</template>

<script>
import CodeBlock from "./CodeBlock";
export default {
  name: "CodePreview",
  components: { CodeBlock },
  methods: {
    clickBlock(item) {
      this.current = item;
      this.value = this[item];
      this.updateHeight();
    },
    updateHeight() {
      this.timer = setTimeout(() => {
        this.$refs.previewRef.style.height =
          this.$refs.blockRef.$el.firstElementChild.offsetHeight + 45+ "px";
      }, 500);
    },
    mouseLeave() {
      clearTimeout(this.timer);
      this.$refs.previewRef.style.height = 45 + "px";
    },
  },
  props: {
    html: String,
    js: String,
    css: String,
    dark: Boolean,
    default: {
      type: String,
      default: "html",
    },
  },
  mounted() {
    this.current = this.default;
    this.value = this[this.current];
    this.html ? this.codeTypes.push("html") : null;
    this.js ? this.codeTypes.push("js") : null;
    this.css ? this.codeTypes.push("css") : null;
    this.$refs.previewRef.style.height = "45px";
  },
  data: () => ({
    current: "",
    value: "",
    codeTypes: [],
    timer: null,
  }),
};
</script>
<style scoped lang="scss">
.code-preview {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 10px 0;
  height: 50px;
  overflow: hidden;
  transition: 0.3s;
}
.is-out-dark {
  border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>
