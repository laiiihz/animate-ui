<template>
  <button
    @click="handleClick"
    :autofocus="autoFocus"
    :class="[
      'a-button',
      'a-button--' + type,
      'a-button--' + size,
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-rect': rect,
        'is-dash': dash,
        'is-text': text,
        'is-flat': flat,
        'is-circle': circle,
        'is-outline': outline,
      },
    ]"
  >
    <i v-if="icon" class="material-icons">{{ icon }}</i>
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
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    icon: String,
    circle: Boolean,
    rect: Boolean,
    disabled: Boolean,
    round: Boolean,
    dash: Boolean,
    text: Boolean,
    flat: Boolean,
    outline: Boolean,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
  },
};
</script>
