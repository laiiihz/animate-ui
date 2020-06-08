import AApp from "./AApp";

AApp.install = function (Vue) {
  Vue.component(AApp.name, AApp);
};

export default AApp;
