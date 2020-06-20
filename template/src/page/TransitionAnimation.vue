<template>
  <page-padding>
    <a-h :dark="dark">过渡动画</a-h>
    <a-h h="2" :dark="dark">Slide-x</a-h>
    <transition name="slide-x" mode="out-in">
      <div
        :key="slideX"
        :class="slideX ? 'slide-first' : 'slide-second'"
        @click="handleClick"
      ></div>
    </transition>
    <code-preview :value-object="slideXValue" :dark="dark"></code-preview>
    <a-h h="2" :dark="dark">Slide-y</a-h>
    <transition name="slide-y" mode="out-in">
      <div
        :key="slideY"
        :class="slideY ? 'slide-first' : 'slide-second'"
        @click="handleYClick"
      ></div>
    </transition>
    <code-preview :value-object="slideYValue" :dark="dark"></code-preview>
    <a-h h="2" :dark="dark">scale-up</a-h>
    <transition name="scale-up" mode="out-in">
      <div
        :key="scaleUp"
        :class="scaleUp ? 'slide-first' : 'slide-second'"
        @click="handleScaleClick"
      ></div>
    </transition>
    <code-preview :value-object="scaleUpValue" :dark="dark"></code-preview>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
import CodePreview from "../components/CodePreview";
export default {
  name: "TransitionAnimation",
  components: { CodePreview, PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  data: () => ({
    slideX: false,
    slideY: false,
    scaleUp: false,
    slideXValue: {
      html: `<transition name="slide-x" mode="out-in">`,
    },
    slideYValue: {
      html: `<transition name="slide-y" mode="out-in">`,
    },
    scaleUpValue: {
      html: `<transition name="scale-up" mode="out-in">`,
    },
  }),
  methods: {
    handleClick() {
      this.slideX = !this.slideX;
    },
    handleYClick() {
      this.slideY = !this.slideY;
    },
    handleScaleClick() {
      this.scaleUp = !this.scaleUp;
    },
  },
};
</script>

<style scoped>
.slide-first,
.slide-second {
  height: 100px;
  width: 100px;
  border-radius: 10px;
}
.slide-first {
  background-color: #42a5f5;
}
.slide-second {
  background-color: #8f3230;
}
</style>
