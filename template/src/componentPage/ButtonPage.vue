<template>
  <page-padding>
    <a-h :dark="dark">按钮</a-h>
  </page-padding>
</template>

<script>
import PagePadding from "../page/PagePadding";
export default {
  name: "ButtonPage",
  components: { PagePadding },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
  },
};
</script>

<style scoped></style>
