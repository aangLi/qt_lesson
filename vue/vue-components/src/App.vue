<template>
  <div id="app">
    <img src="./assets/logo.png">
    <i-button size="large" @click.native="handleClick">按钮</i-button>
    <i-button size="small" @click="handleClick"></i-button>
    <router-view/>
  </div>
</template>

<script>
import button from '@/components/common/button'
export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      name: 'AANGLI',
      age: '20',
      sex: 'man'
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    handleClick (e) {
      console.log(123)
    },
    userInfo () {
      console.log('AANGLI')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
