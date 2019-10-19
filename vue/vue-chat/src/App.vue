<template>
  <div class="chatapp">
    <!-- 容器组件 -->
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './ThreadSection'
import MessageSection from './MessageSection'

export default {
  name: 'App',
  components: {
    ThreadSection: 'thread-section',
    MessageSection: 'message-section'
  },
  mounted() {
    this.$store.dispatch('getAllMessages');
  }
}
</script>

<style src="./css/chat.css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
