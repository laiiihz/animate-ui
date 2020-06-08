<template>
  <div :class="['a-app', { 'is-dark': dark }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AApp",
  props: {
    dark: Boolean,
  },
};
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
    margin: unset;
  }
</style>
