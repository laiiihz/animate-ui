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
import AContainer from "./container/AContainer";
import AMenu from "./menu/AMenu";
import AMenuItem from "./menu/AMenuItem";

const components = [
  AAlert,
  AButton,
  ACard,
  AContainer,
  ACheckbox,
  AColumn,
  AHeader,
  AHeaderMenu,
  AMenu,
  AMenuItem,
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
  AContainer,
  ACheckbox,
  AHeader,
  AHeaderMenu,
  AMenu,
  AMenuItem,
  ARow,
  AScrollbar,
};
