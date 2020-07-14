export default {
  inserted: function (el) {
    let defaultShadow = window.getComputedStyle(el).boxShadow;
    el.style.transition = ".3s linear !important";
    let layerDefault = ",0 0 0px 0px rgba(0,0,0,.2)";
    let layer1 = ",0 0 0px 10px rgba(0,0,0,0)";
    let layer2 = ",0 0 0px 20px rgba(0,0,0,0)";
    let layer3 = ",0 0 0px 30px rgba(0,0,0,0)";
    el.animate(
      [
        {
          boxShadow: defaultShadow + layerDefault + layerDefault + layerDefault,
          opacity: 1,
        },
        { boxShadow: defaultShadow + layer1 + layer2 + layer3, opacity: 1 },
      ],
      {
        duration: 1000,
        delay: 0,
        iterations: Infinity,
      }
    );
  },
};
