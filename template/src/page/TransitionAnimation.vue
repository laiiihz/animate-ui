<template>
  <page-padding>
    <a-h :dark="dark">过渡动画</a-h>
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
};
</script>

<style scoped></style>
