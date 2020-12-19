<template>
  <div>
    <div class="home">
      <div class="header">
        <div class="title-wrap">
          <span>子菜单名：{{ selectMenu ? selectMenu : "协会简介" }}</span>
        </div>
        <div class="search-wrap">
          <div class="login">
            <span>会员登录</span>
            <span>入会申请</span>
            <span>会员登录(旧版入口)</span>
          </div>
          <div class="search">
            <input type="text" placeholder="输入关键字搜索" class="search" />
            <div class="iconfont icon-sousuo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["selectMenu"]),
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 140px;
  align-items: center;
  justify-content: space-around;
  .title-wrap {
    background-color: #125da3;
    color: #fff;
    width: 240px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}

.search-wrap {
  position: relative;
  .login {
    position: absolute;
    top: -35px;
    right: 0;
    span {
      font-size: 14px;
      color: #0069d6;
      margin-left: 20px;
    }
  }
  .search {
    display: flex;
    position: relative;
    input {
      width: 360px;
      height: 40px;
      background-color: #eaf4fd;
      border: 1px solid #125da3;
    }
    .icon-sousuo {
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      background-color: #125da3;
      height: 100%;
      font-size: 20px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
