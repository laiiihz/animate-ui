<template>
  <page-padding>
    <a-h h="1" :dark="dark">色彩</a-h>
    <a-h h="2" :dark="dark"
      >推荐使用<a-link
        target="blank"
        :dark="dark"
        type="primary"
        href="https://material.io/design/color/the-color-system.html"
        >Material Design Color System<i class="material-icons">link</i></a-link
      ></a-h
    >
    <a-row>
      <a-column
        :col="6"
        v-for="item in types"
        :key="item.name"
        style="padding: 10px;"
      >
        <a-h :dark="dark" h="3">{{ item.name + "&nbsp;" + item.color }}</a-h>
        <div
          :class="[item.name]"
          style="height: 50px; width: 100%; border-radius: 10px;"
          :style="`background-color:${item.color}`"
        ></div>
      </a-column>
    </a-row>
  </page-padding>
</template>

<script>
import PagePadding from "./PagePadding";
import darkMixin from "../mixins/darkMixin";
export default {
  name: "ColorPage",
  components: { PagePadding },
  mixins:[darkMixin],
  data: () => ({
    types: [
      {
        name: "primary",
        color: "#42a5f5",
      },
      {
        name: "info",
        color: "#90a4ae",
      },
      {
        name: "warn",
        color: "#ef5350",
      },
      {
        name: "danger",
        color: "#ffee58",
      },
      {
        name: "primary-dark",
        color: "#1565c0",
      },
      {
        name: "info-dark",
        color: "#424242",
      },
      {
        name: "warn-dark",
        color: "#c62828",
      },
      {
        name: "danger-dark",
        color: "#f9a825",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
$primary_color: #42a5f5;
$warn_color: #ef5350;
$info_color: #90a4ae;
$danger_color: #ffee58;

$primary_color_dark: #1565c0;
$warn_color_dark: #c62828;
$info_color_dark: #424242;
$danger_color_dark: #f9a825;

$colorMap: (
  primary: $primary_color,
  warn: $warn_color,
  info: $info_color,
  danger: $danger_color,
  primary-dark: $primary_color_dark,
  warn-dark: $warn_color_dark,
  info-dark: $info_color_dark,
  danger-dark: $danger_color_dark,
);
@mixin colorGen($type) {
  .#{$type} {
    background-color: map_get($colorMap, $type);
  }
}
@each $item in (map_keys($colorMap)) {
  @include colorGen($item);
}
</style>
