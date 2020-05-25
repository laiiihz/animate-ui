<template>
  <button @click="handleClick" :autofocus="autoFocus" :class="[
          'a-button',
  ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    autoFocus: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
