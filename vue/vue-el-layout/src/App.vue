<template>
  <div id="app">
    <!-- <ElRow :id="1"/> -->
    <el-row>
      东西
    </el-row>
  </div>
</template>

<script>

import ElRow from './components/el-row'
import ElCow from './components/el-col'
export default {
  name: 'App',
  components: {
    ElRow,
    ElCow
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
