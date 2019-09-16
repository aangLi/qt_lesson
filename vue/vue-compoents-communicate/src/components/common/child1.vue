<template>
  <div id="child1">
    {{msg}}
    {{msg1}}
    <button @click='appFn'>按钮</button>
    <!-- {{test.a}}
    {{test.b}} -->
    {{a}}
    {{b}}
    <p>--------------------------------------</p>
    <button @click='add'>+</button>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'Child1',
  // props: ['msg', 'msg1', 'appFn', 'test']
  props: ['msg', 'msg1', 'appFn', 'a', 'b', 'count'],
  // data () {
  //   return {
  //     oCount: 0
  //   }
  // },
  // created () {
  //   this.oCount = this.count
  // },
  methods: {
    add () {
      this.$emit('addCount')
    }
  }
}
</script>

<style>
</style>
