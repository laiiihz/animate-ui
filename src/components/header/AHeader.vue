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
      },
    ]"
    :style="height ? 'height:' + height + 'px' : ''"
  >
    <div class="a-header__leading">
      <slot name="leading"></slot>
    </div>
    <span class="a-header__title"><slot></slot></span>
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
  },
};
</script>
