<template>
  <div id="app" class="container">
    <div id="nav">
      <Nav v-if="isShowNav" :navSelect="navSelect"></Nav>
    </div>
    <div class="layout">
      <router-view />
      <Slider v-if="isShowSlider" class="right-slider"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
// import Component from 'vue-class-component'
import Nav from "@/components/nav.vue";
import Slider from "@/components/slider.vue"
@Component({
  components: {
    Nav,
    Slider
  }
})
export default class App extends Vue {
  private isShowNav: boolean = false
  private isShowSlider: boolean = false
  private navSelect: string = ''
  // 监听路由
  @Watch('$route')
  routeChange(val: any, oldVal: any) {
    this.navSelect = val.path;
    if (val.path === '/') {
      this.isShowNav = false
      this.isShowSlider = false
    } 
    else {
      this.isShowNav = true
      if (val.path === '/message' || val.path === '/about') {
        this.isShowSlider = false
      } else {
        this.isShowSlider = true;
      }
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-decoration: none;
  padding-top: 61px;
  margin: 0 auto;
  width: 1200px;
  // text-align: center
}

@media screen and (max-width: 780px) {
  .container {
    font-size: .3rem;
    width: 100% !important;
  }
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    list-style: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.layout {
  display: flex;
  // justify-content: space-around;
  .right-slider {
    flex: 0 0 350px
  }
}
</style>
