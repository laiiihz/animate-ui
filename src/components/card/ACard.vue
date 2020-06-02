<template>
  <div
    :style="{
      borderRadius: radius + 'px',
    }"
    :class="[
      'a-card',
      'shadow_height_' + elevation,
      {
        'is-rect': rect,
        'is-flat': flat,
        'is-hover': hover,
        'is-outline': outline,
        'is-top-left': topLeft,
        'is-top-right': topRight,
        'is-bottom-left': bottomLeft,
        'is-bottom-right': bottomRight,
        'is-filled': filled,
        'is-pop': pop,
        'is-art-elevation': artElevation,
      },
    ]"
  >
    <div :class="['a-card__title']">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ACard",
  props: {
    elevation: {
      type: Number,
      default: 1,
    },
    radius: Number,
    rect: Boolean,
    flat: Boolean,
    hover: Boolean,
    outline: Boolean,
    topLeft: Boolean,
    topRight: Boolean,
    bottomLeft: Boolean,
    bottomRight: Boolean,
    filled: Boolean,
    pop: Boolean,
    artElevation: Boolean,
  },
};
</script>

<style scoped></style>
