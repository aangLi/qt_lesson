<template>
  <div id="app">
    <v-Header :seller="seller"></v-Header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-Header': Header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d721c4c9aaed00b9c3bde5e/vue-eleme-seller/vue-eleme-seller').then(res => {
      if (res.data.errno === 0) {
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
  .tab
    display flex
    height 40px
    align-items center
    border-bottom 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex 1
    text-align center

    & > a
      text-decoration none
      display block
      font-size 14px
      color rgb(77,85,93)
      &.router-link-exact-active
        color rgb(240,20,20)
</style>
