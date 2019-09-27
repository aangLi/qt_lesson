
<script>
export default {
  data() {},
  render (h) {
    let obj = h(
      'div',
      {},
      'render 函数'
    )
    // return 'render 函数'
    console.log(obj)
    return obj;
  }
}
</script>
<style lang="">
/* 3 1 */
/* 24 */
  .el-row {
    width: 100%;
  }
</style>