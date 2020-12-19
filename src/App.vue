<template>
  <div id="app">
    <m-header></m-header>
    <tab-bar />

    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from "components/m-header/MHeader";
import TabBar from "components/tabbar/TabBar.vue";

export default {
  components: {
    MHeader,
    TabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
@import "assets/css/iconfont.css";
</style>
