<template>
  <page-padding>
    <a-h h="1" :dark="dark">色彩</a-h>
    <a-h h="2" :dark="dark"
      >推荐使用<a-link
        target="blank"
        :dark="dark"
        type="primary"
        href="https://material.io/design/color/the-color-system.html"
        >Material Design Color System<i class="material-icons">link</i></a-link
      ></a-h
    >
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
export default {
  name: "ColorPage",
  components: { PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
};
</script>

<style scoped></style>
