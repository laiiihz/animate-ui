<template>
  <button
    @click="handleClick"
    :autofocus="autoFocus"
    :class="[
      'a-button',
      `a-button--${type}${dark ? '-dark' : ''}`,
      `a-button--${size}`,
      icon && $slots.default ? 'a-button-anime' : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-rect': rect,
        'is-dash': dash,
        'is-text': text,
        'is-flat': flat,
        'is-circle': circle,
        'is-outline': outline,
        'is-art-elevation': artElevation,
        'is-dark': dark,
        'is-bold': bold,
        'is-push': push,
      },
    ]"
  >
    <i
      v-if="icon"
      class="material-icons"
      :class="[
        'a-button__icon',
        { 'a-button__icon-anime': icon && $slots.default },
      ]"
    >
      {{ icon }}
    </i>
    <span :class="[{ 'a-button__text-anime': icon && $slots.default }]">
      <slot></slot>
    </span>
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
      validator: (val) => ["medium", "large", "small"].includes(val),
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
    artElevation: Boolean,
    to: {
      type: [String, Object],
    },
    dark: Boolean,
    bold: Boolean,
    push: Boolean,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) this.$emit("click", event);
      if (this.to) {
        this.$router.push({ name: this.to });
      }
    },
  },
};
</script>
