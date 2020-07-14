export default {
  default: {
    html: `<a-button v-for="item in types" :type="item" :key="item">
      {{ item }}
</a-button>`,
    js: `data: () => ({
          types: ["default", "primary", "info", "warn", "danger"],
)}`,
  },
  icon: {
    html: `<a-button icon="face"></a-button>
<a-button icon="face" circle></a-button>`,
  },
  round: {
    html: `<a-button Round>Round</a-button>`,
  },
  dash: {
    html: `<a-button dash>Dash</a-button>`,
  },
};
