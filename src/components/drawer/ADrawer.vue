<template>
  <transition name="fade">
    <div
      @click.self="handleClick"
      :class="['a-drawer-mask']"
      :style="blur ? `backdrop-filter: blur(${blurValue})` : ''"
      v-show="visible"
    >
      <transition :name="`${direction}-animation`">
        <div
          v-show="visible"
          :class="['a-drawer', 'a-drawer--' + direction, { 'is-dark': dark }]"
          :style="[this.widthStyle, this.heightStyle]"
        ></div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ADrawer",
  props: {
    dark: Boolean,
    blur: {
      type: [Boolean, Number, String],
    },
    visible: Boolean,
    direction: {
      type: String,
      default: "left",
      validator: (val) => ["left", "right", "top", "bottom"].includes(val),
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
  },
  computed: {
    blurValue() {
      if (typeof this.blur == "boolean") {
        return "5px";
      } else if (typeof this.blur == "number") {
        return `${this.blur}px`;
      } else {
        if (this.blur.indexOf("px") === -1) {
          return `${this.blur}px`;
        }
        return this.blur;
      }
    },
    widthStyle() {
      switch (typeof this.width) {
        case "number":
          return { width: `${this.width}px` };
        case "string":
          if (this.width.indexOf("px") === -1)
            return { width: `${this.width}px` };
          else return { width: this.width };
        case "undefined":
        default:
          return {};
      }
    },
    heightStyle() {
      switch (typeof this.height) {
        case "string":
          if (this.height.indexOf("px") === -1)
            return { height: `${this.height}px` };
          else return { height: this.height };
        case "number":
          return { height: `${this.height}px` };
        case "undefined":
        default:
          return {};
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("update:visible", false);
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
@import "../style/animations";
@include animation_enter("fade", 0.3s) {
  opacity: 0;
}
@include animation_leave("fade", 0.3s) {
  opacity: 0;
}
</style>
