<template>
  <div>
    <h2 :class="['api', { 'is-dark': dark }]">API</h2>
    <a-button
      :dark="dark"
      v-for="item in types"
      :type="item === nowIndex ? 'primary' : null"
      :key="item"
      @click="handleClickButton(item)"
      >{{ item }}</a-button
    >
    <div
      :style="{ height: height + 'px' }"
      :class="['api-box', { 'is-dark': dark }]"
    >
      <transition name="slide-x" mode="out-in">
        <div :key="`${nowIndex}${_uid}`">
          <APIObject
            :dark="dark"
            :value-objects="valueObject[nowIndex]"
          ></APIObject>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import APIObject from "./APIObject";
export default {
  name: "API",
  components: { APIObject },
  props: {
    dark: Boolean,
    valueObject: Object,
  },
  mounted() {
    this.valueObject["Props"] ? this.types.push("Props") : null;
    this.valueObject["Slots"] ? this.types.push("Slots") : null;
    this.valueObject["Events"] ? this.types.push("Events") : null;
    this.nowIndex = Object.keys(this.valueObject)[0];
    this.height =
      this.valueObject[Object.keys(this.valueObject)[0]].length * 57 + 10;
  },
  data: () => ({
    types: [],
    nowIndex: "",
    height: 10,
  }),
  methods: {
    handleClickButton(item) {
      this.nowIndex = item;
      this.height = this.valueObject[this.nowIndex].length * 57 + 10;
    },
  },
};
</script>

<style lang="scss" scoped>
.api {
  transition: 0.3s;
  &.is-dark {
    color: white;
  }
  &-box {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    transition: 0.3s ease-in-out;
    overflow: hidden;
    padding: 5px;
    &.is-dark {
      border-width: 2px;
      border-color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
