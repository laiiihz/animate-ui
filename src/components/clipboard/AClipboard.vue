<template>
  <div ref="clipboard" @click="handleCopy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Clipboard",
  props: {
    customData: String,
  },
  methods: {
    handleCopy() {
      let data = this.customData
        ? this.customData
        : this.$refs.clipboard.textContent;
      navigator.clipboard.writeText(data).then(
        () => {
          this.$emit("success");
        },
        () => {
          this.$emit("fail");
        }
      );
    },
  },
};
</script>

<style scoped></style>
