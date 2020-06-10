export default {
  name: "AScrollbar",
  componentName: "AScrollbar",
  props: {
    height: {
      type: [Number, String],
      default: 500,
    },
    dark: Boolean,
  },
  computed: {
    heightValue() {
      if (typeof this.height == "number") {
        return `${this.height}px`;
      } else {
        return this.height;
      }
    },
  },
  render(h) {
    return h(
      "div",
      {
        class: ["a-scrollbar-css", { "is-dark": this.dark }],
        style: `height:${this.heightValue}`,
      },
      this.$slots.default
    );
  },
};
