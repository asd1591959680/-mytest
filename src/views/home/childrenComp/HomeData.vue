<template>
  <div class="data-text">
    <span>{{ dataList.distToEarth }}</span>
    <span>{{ dataList.id }}</span>
    <span>{{ dataList.name }}</span>
    <span>{{ dataList.size }}</span>
  </div>
</template>

<script>
import { getData } from "network/dataList.js";
export default {
  components: {},
  data() {
    return {
      dataList: {},
    };
  },
  created() {
    this._getData();
  },
  methods: {
    _getData() {
      getData().then((res) => {
        this.dataList = res.result;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.data-text {
  span {
    padding: 10px;
  }
}
</style>
