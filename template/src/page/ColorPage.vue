<template>
  <page-padding>
    <a-h h="1" :dark="dark">色彩</a-h>
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
