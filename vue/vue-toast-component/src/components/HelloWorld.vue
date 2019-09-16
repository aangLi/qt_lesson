<template>
  <div>
    <!-- v-show v-bind v-if v-for 统称为指令 -->
    <button @click='setVisiable'>购买</button>
    <!-- <Toast :msg='msg' :visiable='visiable' /> -->
  </div>
</template>

<script>
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  components: {
    // Toast,
  },
  methods: {
    setVisiable () {
      // this.visiable = !this.visiable
      // setVisiableTimeout()
      showMessage('没到开售时间')
    },
  },
  data () {
    return {
      msg: '测试弹窗1',
      visiable: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
