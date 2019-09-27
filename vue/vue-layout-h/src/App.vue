<template>
<div id="App">
  <el-button :plain="true" @click="openVn">VNode</el-button>
  <my-elrow tag="div" :jiange="20">
    <!-- 24 -->
    <my-elcow :span="4">cle-out</my-elcow>
    <my-elcow :span="16" :offset="4">clecow-out</my-elcow>
  </my-elrow>
</div>
  
</template>

<script>
import ElRow from './components/El-Row'
import ElCol from './components/El-Col'
export default {
  name: 'App',
  components: {
    'my-elrow':ElRow,

    'my-elcow':ElCol
  },
  methods: {
    openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          duration: 0
        });
      }
  },
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
