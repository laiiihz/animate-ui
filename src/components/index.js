
import AButton from "./button/AButton";
import './style/index.scss'
const components =[
  AButton
];



const install = function (Vue) {
  components.forEach(component=>{
    Vue.component(component.name,component)
  })
}

export default {
  install,
  AButton,
};
