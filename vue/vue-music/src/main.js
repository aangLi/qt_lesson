// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import def_lazy_img from '../static/img/loading.gif'

Vue.use(VueLazyLoad, {
  loading: def_lazy_img
})

// 阻止你的默认点击事件， 派发一个一模一样的点击事件
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
