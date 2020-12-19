<template>
  <div id="tab-bar">
    <router-link
      tag="div"
      class="tab-item"
      to="/home"
      :class="{ active: current == 0 }"
    >
      <span class="tab-link" data-index="0" @mouseenter="tabChange"
        >网站首页</span
      >
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/about"
      :class="{ active: current == 1 }"
    >
      <span class="tab-link" data-index="1" @mouseenter="tabChange"
        >关于协会</span
      >
      <tab-bar-item
        :title="childrenMenu"
        ref="childrenMenu"
        @clearIndex="clearIndex"
      />
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/action"
      :class="{ active: current == 2 }"
    >
      <span class="tab-link" data-index="2" @mouseenter="tabChange"
        >会议动态</span
      >
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/service"
      :class="{ active: current == 3 }"
    >
      <span class="tab-link" data-index="3" @mouseenter="tabChange"
        >会员服务</span
      >
    </router-link>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  components: { TabBarItem },
  data() {
    return {
      current: null,
      childrenMenu: [
        {
          id: 0,
          text: "协会简介",
        },
        {
          id: 1,
          text: "协会章程",
        },
        {
          id: 2,
          text: "协会动态",
        },
        {
          id: 3,
          text: "专家智库",
        },
      ],
    };
  },
  methods: {
    tabChange(e) {
      this.current = e.target.dataset.index;
      if (this.current == 1) {
        this.$refs.childrenMenu.show();
      } else {
        this.$refs.childrenMenu.hide();
      }
    },
    clearIndex() {
      this.current = null;
    },
  },
};
</script>
<style lang="less" scoped>
#tab-bar {
  display: flex;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  background-color: #125da3;
  color: #fff;
  padding-left: 10%;
  .tab-item {
    width: 100px;
    text-align: center;
    .tab-link {
      display: inline-block;
      height: 100%;
      width: 100%;
    }
  }
  .active {
    background-color: #1777d1;
  }
}
</style>
