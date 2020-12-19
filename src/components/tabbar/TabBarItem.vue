<template>
  <div
    class="title"
    v-show="isShow"
    @mouseleave.stop="leave"
    @mouseenter.stop="enter"
  >
    <div
      v-for="item in title"
      :key="item.id"
      :class="{ active: current == item.id }"
    >
      <span class="tabbar-text" @mouseenter.stop="changeIndex(item)">{{
        item.text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      current: null,
      isShow: false,
    };
  },
  methods: {
    changeIndex(item) {
      this.current = item.id;
      this.$store.commit("SET_MENU", item.text);
    },

    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    leave() {
      this.hide();
      this.current = null;
    },
    enter() {
      this.$emit("clearIndex");
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  position: relative;
  z-index: 10;
  background-color: #125da3;
  .tabbar-text {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
}
.active {
  background-color: #1777d1;
}
</style>
