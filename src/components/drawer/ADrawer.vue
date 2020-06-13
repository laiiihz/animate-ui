<template>
  <transition name="fade">
    <div
      @click.self="handleClick"
      :class="['a-drawer-mask']"
      :style="[blurValue]"
      v-show="visible"
    >
      <transition :name="`${direction}-animation`">
        <div
          v-show="visible"
          :class="['a-drawer', 'a-drawer--' + direction, { 'is-dark': dark }]"
          :style="[this.widthStyle, this.heightStyle]"
        >
          <div @click="handleClose" :class="['a-drawer__close']">
            <i :class="['material-icons', 'a-drawer__close--icon']">close</i>
          </div>
        </div>
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
    width: [Number, String],
    height: [Number, String],
  },
  computed: {
    blurValue() {
      switch (typeof this.blur) {
        case "boolean":
          return { backdropFilter: "blur(5px)" };
        case "number":
          return { backdropFilter: `blur(${this.blur}px)` };
        case "string":
          if (this.blur.indexOf("px") === -1)
            return { backdropFilter: `blur(${this.blur}px)` };
          else return { backdropFilter: `blur(${this.blur})` };
        case "undefined":
        default:
          return {};
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
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
@import "../style/mixins/mixins";
@include animation_enter("fade", 0.3s) {
  opacity: 0;
}
@include animation_leave("fade", 0.3s) {
  opacity: 0;
}
</style>
