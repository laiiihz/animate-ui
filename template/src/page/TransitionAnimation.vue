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
    <a-h h="2" :dark="dark">Slide-y</a-h>
    <transition name="slide-y" mode="out-in">
      <div
        :key="slideY"
        :class="slideY ? 'slide-first' : 'slide-second'"
        @click="handleYClick"
      ></div>
    </transition>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
export default {
  name: "TransitionAnimation",
  components: { PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
  data: () => ({
    slideX: false,
    slideY: false,
  }),
  methods: {
    handleClick() {
      this.slideX = !this.slideX;
    },
    handleYClick() {
      this.slideY = !this.slideY;
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
