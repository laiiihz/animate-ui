<template>
  <div class="a-scrollbar" onscroll="scroll">
    <slot></slot>
    <div
      :style="{
        position: 'fixed',
        top: 0,
        right: 0,
        height: barHeight + 'px',
        width: '10px',
        background: 'grey',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AScrollbar",
  mounted() {
    let childHeight = this.$el.firstChild.style.height.toString().slice(0, -2);
    let windowHeight = window.innerHeight;
    this.barHeight = (windowHeight / childHeight) * windowHeight;

  },
  destroyed() {},
  data: () => ({
    barHeight: 0,
  }),
  methods:{

  }
};
</script>

<style scoped></style>
