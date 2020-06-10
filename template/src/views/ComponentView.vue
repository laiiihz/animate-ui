<template>
  <padding-top-view>
    <a-row>
      <a-column :col="4">
        <a-menu border round :dark="$store.state.dark">
          <a-menu-item
            :title="item.type === 'title'"
            :sub-title="item.type === 'subtitle'"
            v-for="item in componentList"
            :key="item.path"
            :active="$route.name === item.path"
            @click="item.type !== 'title' ? onClickSub(item.path) : null"
          >
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-column>
      <a-column :col="8">
        <transition name="slide-y" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-column>
    </a-row>
  </padding-top-view>
</template>

<script>
import PaddingTopView from "./PaddingTopView";
import componentList from "../conponentsList";
export default {
  name: "ComponentView",
  components: { PaddingTopView },
  data: () => ({
    windowHeight: "",
    componentList: componentList,
  }),
  methods: {
    onClickSub(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style scoped></style>
