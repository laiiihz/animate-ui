/*
 * JS scrollbar
 */
// import AScrollbar from "./AScrollbar";
import AScrollbar from "./AScrollbar";
AScrollbar.install = function (Vue) {
  Vue.component(AScrollbar.name, AScrollbar);
};

export default AScrollbar;
