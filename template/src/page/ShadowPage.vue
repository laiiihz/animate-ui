<template>
  <page-padding>
    <a-h :dark="dark">阴影</a-h>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
export default {
  name: "ShadowPage",
  components: { PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
};
</script>

<style scoped></style>
