<template>
  <div
    ref="scrollbarRef"
    class="a-scrollbar"
    :style="{
      height: height + 'px',
    }"
    @mouseenter="mouseIn = true"
    @mouseleave="mouseIn = false"
  >
    <slot name="default"></slot>
    <div
      @dragenter="handleDrag"
      @drag="handleEvent"
      :style="{
        position: 'absolute',
        top: barTop + 'px',
        right: 0,
        height: barHeight + 'px',
        width: '10px',
        background: 'grey',
        borderRadius: '10px',
        opacity: mouseIn ? 1 : 0,
      }"
      :class="['a-scrollbar--bar']"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AScrollbar",
  props: {
    height: {
      type: Number,
      default: 300,
    },
  },
  mounted() {
    this.childHeight = this.$slots.default[0].context.$children[0].$el.firstElementChild.scrollHeight;
    this.$el.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    this.$el.removeEventListener("scroll", this.onScroll);
  },
  data: () => ({
    childHeight: 100,
    childTop: 0,
    mouseIn: false,
    dragStart: 0,
  }),
  computed: {
    barHeight() {
      return (this.height / this.childHeight) * this.height;
    },
    barTop() {
      return (this.height / this.childHeight) * this.childTop + this.childTop;
    },
  },
  methods: {
    onScroll() {
      this.childTop = this.$refs.scrollbarRef.scrollTop;
    },
    handleDrag(event) {
      this.dragStart = event.clientY;
    },
    handleEvent(event) {
      console.log(event.clientY);
      //console.log(event.clientY - this.dragStart);
      this.$refs.scrollbarRef.scrollTo();
    },
  },
};
</script>

<style scoped></style>
