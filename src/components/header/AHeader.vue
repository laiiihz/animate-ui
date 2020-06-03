<template>
  <div
    :class="[
      'a-header',
      {
        'is-blur': blur,
        'is-dense': dense,
        'is-fixed': fixed,
        'is-flat': flat,
        'is-under-line': underLine,
        'is-under-round': underRound,
      },
    ]"
    :style="{
      height: height ? height + 'px' : '',
      backgroundColor: backgroundColor
        ? backgroundColor
        : dark
        ? 'rgba(0,0,0,.7)'
        : 'rgba(255,255,255,.7)',
    }"
  >
    <div class="a-header__leading">
      <slot name="leading"></slot>
    </div>
    <span
      class="a-header__title"
      :style="{ color: dark ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.9)' }"
      ><slot></slot
    ></span>
    <div class="a-header__menus">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AHeader",
  props: {
    blur: Boolean,
    fixed: Boolean,
    dense: Boolean,
    height: Number,
    flat: Boolean,
    underLine: Boolean,
    underRound: Boolean,
    dark: Boolean,
    backgroundColor: String,
  },
};
</script>
