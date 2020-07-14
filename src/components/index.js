import "./style/index.scss";
import AButton from "./button/index";
import AHeader from "./header/index";
import AScrollbar from "./scrollbar/index";
import ACard from "./card/index";
import AAlert from "./alert/index";
import AHeaderMenu from "./header/index";
import ACheckbox from "./checkbox/index";
import ARow from "./row/index";
import AColumn from "./column/index";
import AContainer from "./container/index";
import AMenu from "./menu/index";
import AMenuItem from "./menuItem/index";
import AApp from "./app/index";
import AH from "./heading/index";
import ALink from "./link/index";
import ADrawer from "./drawer/index";
import AClipboard from "./clipboard/index";
import Pulse from "../directives/Pulse";

const components = [
  AAlert,
  AApp,
  AButton,
  ACard,
  ACheckbox,
  AClipboard,
  AColumn,
  AContainer,
  ADrawer,
  AH,
  AHeader,
  AHeaderMenu,
  ALink,
  AMenu,
  AMenuItem,
  ARow,
  AScrollbar,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.directives("pulse", Pulse);
};

export default {
  install,
  AAlert,
  AApp,
  AButton,
  ACard,
  ACheckbox,
  AClipboard,
  AColumn,
  AContainer,
  ADrawer,
  AH,
  AHeader,
  AHeaderMenu,
  ALink,
  AMenu,
  AMenuItem,
  ARow,
  AScrollbar,
  Pulse,
};
