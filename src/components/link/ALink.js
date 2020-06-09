export default {
  name: "ALink",
  componentName: "ALink",
  props: {
    tag: {
      type: String,
      default: "a",
    },
    to: [String, Object],
    dark: Boolean,
    href: String,
    type: {
      type: String,
      default: "default",
      validator: (val) =>
        ["default", "primary", "info", "warn", "danger"].includes(val),
    },
    underLine: Boolean,
    disabled: Boolean,
    target: {
      type: String,
      default: "self",
      validator: (val) => ["blank", "parent", "top", "self"].includes(val),
    },
  },
  beforeMount() {
    if (this.to) {
      this.tag = "router-link";
    }
  },
  computed: {
    rawTarget() {
      return `_${this.target}`;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        attrs: {
          href: this.disabled ? null : this.href,
          target: this.rawTarget,
        },
        props: {
          to: this.to,
        },
        class: [
          "a-link",
          `a-link__${this.type}${this.dark ? "-dark" : ""}`,
          {
            "is-dark": this.dark,
            "is-under-line": this.underLine,
            "is-disabled": this.disabled,
          },
        ],
      },
      this.$slots.default
    );
  },
};
