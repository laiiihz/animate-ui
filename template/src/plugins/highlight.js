import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";

let Highlight = {};

Highlight.install = function (Vue) {
  Vue.directive("highlight", function (el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
};

export default Highlight;
