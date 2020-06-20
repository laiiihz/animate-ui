<template>
  <div>
    <div
      class="under-line"
      v-for="item in valueObjects"
      :key="`${item['name']}${_uid}`"
    >
      <span :class="['api-object-name-value', { 'is-dark': dark }]">
        {{ item["name"] }}
        <span
          v-show="item['type']"
          :class="['api-object-name-type', { 'is-dark': dark }]"
          >{{ item["type"] }}</span
        >
      </span>
      <div>
        <span :class="['description', { 'is-dark': dark }]"
          ><span
            v-show="item['default']"
            style="
              margin-right: 10px;
              font-family: 'Jetbrains Mono', monospace;
            "
            >{{ item["default"] }}</span
          >{{ item["des"] }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "APIObjects",
  props: {
    valueObjects: Array,
    dark: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.api-object-name {
  font-size: 20px;
  transition: 0.3s;
  &.is-dark {
    color: white;
  }
  &-value {
    transition: 0.3s;
    font-weight: bolder;
    color: mix(red, #000000, 80%);
    &.is-dark {
      color: mix(red, #fff, 80%);
    }
  }
  &-type {
    transition: 0.3s;
    font-weight: lighter;
    color: #333333;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0 5px;
    font-family: "Jetbrains Mono", monospace;
    &.is-dark {
      color: #dddddd;
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
}
.under-line {
  padding: 5px 0;
  margin: 5px 0;
  box-sizing: border-box;
}
.under-line:not(:last-child) {
  border-bottom: 1px solid #777777;
}
.description {
  transition: 0.3s;
  color: #333333;
  &.is-dark {
    color: #dddddd;
  }
}
</style>
