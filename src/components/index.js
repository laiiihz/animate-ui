import "./style/index.scss";
import AButton from "./button/AButton";
import AHeader from "./header/AHeader";
const components = [AButton, AHeader];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  AButton,
  AHeader,
};
