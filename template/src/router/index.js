import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComponentView from "../views/ComponentView";
import InstallPage from "../page/InstallPage";
import FontPage from "../page/FontPage";
import TransitionAnimation from "../page/TransitionAnimation";
import ColorPage from "../page/ColorPage";
import ShadowPage from "../page/ShadowPage";
import ButtonPage from "../componentPage/ButtonPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/components",
    name: "ComponentView",
    component: ComponentView,
    children: [
      {
        path: "install",
        name: "install",
        component: InstallPage,
      },
      {
        path: "font",
        name: "font",
        component: FontPage,
      },
      {
        path: "transition",
        name: "transition",
        component: TransitionAnimation,
      },
      {
        path: "color",
        name: "color",
        component: ColorPage,
      },
      {
        path: "shadow",
        name: "shadow",
        component: ShadowPage,
      },
      {
        path: "button",
        name: "button",
        component: ButtonPage,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
