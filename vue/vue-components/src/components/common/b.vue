<template>
  <div class="components-B">
    组件B----{{name}}----{{app.age}}
    <button @click="check"></button>
  </div>
</template>

<script>
export default {
  inject: ['name', 'app'],
  methods: {
    check () {
      this.app.userInfo()
    }
  }
}
</script>

<style>

</style>
