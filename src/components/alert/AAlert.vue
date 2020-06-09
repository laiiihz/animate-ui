<template>
  <div
    :class="[
      'a-alert',
      'a-alert--' + type,
      dark ? 'a-alert--' + type + '-dark' : '',
      { 'is-dark': dark },
    ]"
    v-show="visible"
  >
    <div class="a-alert--leading">
      <slot name="leading"></slot>
    </div>
    <div v-if="closable" class="a-alert--close" @click="onClose">
      <span v-if="closeText" class="a-alert--close-text">{{ closeText }}</span>
      <i v-if="!closeText" class="material-icons">close</i>
    </div>
    <span class="a-alert--title">{{ title }}</span>
    <span v-if="subTitle" class="a-alert--subTitle">{{ subTitle }}</span>
  </div>
</template>

<script>
export default {
  name: "AAlert",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (val) =>
        ["default", "primary", "info", "warn", "danger"].includes(val),
    },
    title: String,
    subTitle: String,
    dark: Boolean,
    closeText: String,
    closable: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    visible: true,
  }),
  methods: {
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped></style>
