<template>
  <div id="app">
    <!-- <router-view/> -->
    <child1 :msg='msg' :msg1='msg1' :appFn='appFn' v-bind='test' :count='count' @addCount='addCount'></child1>
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
export default {
  name: 'App',
  components: {
    child1
  },
  data () {
    return {
      msg: '给child1的礼物',
      msg1: '再次给child1礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 1
    }
  },
  methods: {
    appFn () {
      this.count++
    },
    addCount () {
      this.count++
    }
  }
}
</script>

<style>
</style>
