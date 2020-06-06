<template>
  <div :class="['a-container', classes]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AContainer",
  props: {
    padding: Object,
  },
  computed: {
    classes() {
      let result = [];
      if (this.padding) {
        Object.keys(this.padding).forEach((size) => {
          result.push(`a-container--${size}-${this.padding[size]}`);
        });
      }
      return result;
    },
  },
};
</script>

<style scoped></style>
