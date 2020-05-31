<template>
  <button
    @click="handleClick"
    :autofocus="autoFocus"
    :class="[
      'a-button',
      'a-button--'+type,
      'a-button--'+size,
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-rect': rect,
        'is-dash': dash,
        'is-text':text,
        'is-flat':flat,
      },
    ]"
  >
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
    type:{
      type:String,
      default:'default',
    },
    size:{
      type:String,
      default:'medium',
    },
    rect: Boolean,
    disabled: Boolean,
    round: Boolean,
    dash:Boolean,
    text:Boolean,
    flat:Boolean,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
  },
};
</script>
