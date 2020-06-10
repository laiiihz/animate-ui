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
  render(h) {
    return h(
      "div",
      {
        class: ["a-scrollbar-css", { "is-dark": this.dark }],
        style: `height:${this.height}px`,
      },
      this.$slots.default
    );
  },
};
