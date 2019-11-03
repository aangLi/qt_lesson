<template>
  <div class="components-A">组件A---{{app.age}}
    <comb></comb>
  </div>
</template>

<script>
import comb from './b'
export default {
  inject: ['app'],
  components: {
    comb
  },
  data () {
    return {
      test: '我是aaa'
    }
  },
  provide: {
    name: 'AANGLI'
  }
}
</script>

<style>

</style>
