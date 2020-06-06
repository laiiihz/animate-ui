<template>
  <li
    @click="handleClick"
    :class="[
      'a-menu-item',
      {
        'is-dark': dark,
        'is-round': round,
        'is-half-round': halfRound,
        'is-offset': offset,
        'is-shadow': shadow,
        'is-active': active,
        'is-disabled': disabled,
      },
    ]"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "AMenuItem",
  beforeCreate() {
    if (this.$parent.$options.name !== "AMenu") {
      console.error("parent is not AMenu", {
        parent: this.$parent.$options.name,
      });
    }
  },
  props: {
    active: Boolean,
    leading: String,
    disabled: Boolean,
  },
  computed: {
    dark() {
      return this.$parent.$props.dark;
    },
    round() {
      return this.$parent.$props.round;
    },
    halfRound() {
      return this.$parent.$props.halfRound;
    },
    offset() {
      return this.$parent.$props.offset;
    },
    shadow() {
      return this.$parent.$props.shadow;
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
  },
};
</script>

<style scoped></style>
