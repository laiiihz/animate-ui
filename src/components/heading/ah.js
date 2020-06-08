export default {
  name: "AH",
  componentName: "AH",
  props: {
    h: {
      type: [String, Number],
      default: 1,
    },
    dark: Boolean,
  },
  computed: {
    tag() {
      return `h${this.h}`;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ["a-heading", { "is-dark": this.dark }],
      },
      this.$slots.default
    );
  },
};
