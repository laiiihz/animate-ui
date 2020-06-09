<template>
  <ul
    :class="[
      'a-menu',
      border ? `is-border-${direction}` : '',
      { 'is-disabled': disabled, 'is-dark': dark, 'is-collapse': collapse },
    ]"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "AMenu",
  componentName: "AMenu",
  props: {
    //top,left,right,bottom
    direction: {
      type: String,
      default: "vertical",
      validator: (val) => ["vertical", "horizontal"].includes(val),
    },
    disabled: Boolean,
    border: Boolean,
    dark: Boolean,
    round: Boolean,
    halfRound: Boolean,
    offset: Boolean,
    shadow: Boolean,
    collapse: Boolean,
  },
};
</script>

<style scoped></style>
