<template>
  <div class="switch">
    <!-- <button @click="open">开关</button> -->
    <!-- <button @click="todo">点击</button> -->
    <child />
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      switch: false
    }
  },
  components: {
    child
  },
  mounted () {
    this.$on('test', (text) => {
      console.log(text)
    })
  },
  methods: {
    // open () {
    //   // this.switch = true
    //   this.$emit('test', '666')
    // }
    // todo () {
    //   // if (this.switch === true) {
    //   //   console.log(666)
    //   // }
    //   )
    // }
  }
}
</script>

<style>

</style>
