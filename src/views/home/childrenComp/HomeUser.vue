<template>
  <div>
    <div class="list-right">
      <div class="name">张三 33</div>
      <div class="list-title">
        <span
          v-for="(item, index) in listTitle"
          :key="index"
          :class="{ active: listTitleIndex === index }"
          @click="isListTitle(index, item)"
          >{{ item.text }}</span
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listTitleIndex: 0,
      listTitle: [
        {
          name: "blog",
          text: "博客列表",
        },
        {
          name: "friend",
          text: "朋友列表",
        },
      ],
    };
  },
  methods: {
    isListTitle(index, item) {
      this.listTitleIndex = index;
      this.$router.push({
        path: `/home/user/${item.name}`,
      });
    },
  },
  created() {
    this.$router.push({
      path: "/home/user/blog",
    });
  },
};
</script>
<style lang="less" scoped>
.name {
  padding-top: 30px;
  font-size: 20px;
}
.list-title {
  font-size: 14px;
  padding: 20px 0;
  width: 140px;
  display: flex;
  justify-content: space-between;
}

.active {
  font-size: 18px;
  color: #125da3;
  background-color: #fff;
}
</style>
