import "./style/index.scss";
import AButton from "./button/AButton";
import AHeader from "./header/AHeader";
import AScrollbar from "./scrollbar/AScrollbar";
import ACard from "./card/ACard";
import AAlert from "./alert/AAlert";
import AHeaderMenu from "./header/AHeaderMenu";
import ACheckbox from "./checkbox/ACheckbox";

const components = [
  AButton,
  ACard,
  ACheckbox,
  AHeader,
  AHeaderMenu,
  AAlert,
  AScrollbar,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  AButton,
  ACard,
  ACheckbox,
  AHeader,
  AHeaderMenu,
  AAlert,
  AScrollbar,
};
