<template>
  <div
    :class="['a-column', classes]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AColumn",
  props: {
    col: [Number, Object],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    style() {
      let parent = this.$parent;
      let result = {};
      result.paddingLeft = `${parent.gutter / 2}px`;
      result.paddingRight = result.paddingLeft;
      return result;
    },
    classes() {
      let result = [];
      ["col", "xs", "sm", "md", "lg", "xl"].forEach((size) => {
        if (typeof this[size] === "number") {
          result.push(`a-column--${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let options = this[size];
          Object.keys(options).forEach((option) => {
            result.push(`a-column--${size}-${option}-${this[size].span}`);
          });
        }
      });
      return result;
    },
  },
};
</script>

<style scoped></style>
