<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login() {
      Axios.post('/api/v1/login', {
        name: this.name,
        password: this.password
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>