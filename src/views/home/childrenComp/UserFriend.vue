<template>
  <div>
    <table class="list-detail">
      <tr class="detail-text">
        <td>张三</td>
      </tr>
      <tr class="detail-text">
        <td>李四</td>
      </tr>
      <tr class="detail-text">
        <td>王二</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.list-detail {
  width: 168px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding-left: 20px;
  margin-bottom: 30px;
  color: #125da3;

  .detail-text {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    td {
      padding-left: 10px;
    }
  }
}
</style>
