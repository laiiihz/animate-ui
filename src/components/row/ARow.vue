<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ARow",
  props: {
    gutter: Number,
  },
  computed: {
    style() {
      const result = {};
      if (this.gutter) {
        result.marginLeft = `-${this.gutter / 2}px`;
        result.marginRight = result.marginLeft;
      }
      return result;
    },
  },
};
</script>

<style scoped></style>
