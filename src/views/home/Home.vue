<template>
  <div>
    <div class="list">
      <div class="list-left">
        <div
          class="switch-item"
          v-for="(v, i) in switches"
          :key="i"
          :class="{ active: currentIndex === i }"
          @click="isSwitch(i, v)"
        >
          {{ v.text }}
        </div>
      </div>
      <div class="list-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switches: [
        {
          name: "user",
          text: "用户列表",
        },
        {
          name: "data",
          text: "数据获取",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    isSwitch(i, v) {
      this.currentIndex = i;
      this.$router.push({
        path: `/home/${v.name}`,
      });
    },
  },
  created() {
    this.$router.push({
      path: "/home/user",
    });
  },
};
</script>
<style lang="less" scoped>
.list {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  .list-left {
    font-size: 18px;
    background-color: #fff;
    width: 320px;
    box-sizing: border-box;
    margin-right: 20px;
    color: #000;
    height: 138px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px 0px 30px 20px;
  }
  .list-right {
    background-color: #fff;
    width: 740px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-bottom: 10px;
  }
}
.active {
  font-size: 18px;
  color: #125da3;
  background-color: #fff;
}
</style>
