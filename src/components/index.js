import "./style/index.scss";
import AButton from "./button/AButton";
import AHeader from "./header/AHeader";
import AScrollbar from "./scrollbar/AScrollbar";
import ACard from "./card/ACard";
import AAlert from "./alert/AAlert";
import AHeaderMenu from "./header/AHeaderMenu";
import ACheckbox from "./checkbox/ACheckbox";
import ARow from "./row/ARow";
import AColumn from "./column/AColumn";

const components = [
  AAlert,
  AButton,
  ACard,
  ACheckbox,
  AColumn,
  AHeader,
  AHeaderMenu,
  ARow,
  AScrollbar,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  AAlert,
  AButton,
  ACard,
  AColumn,
  ACheckbox,
  AHeader,
  AHeaderMenu,
  ARow,
  AScrollbar,
};
