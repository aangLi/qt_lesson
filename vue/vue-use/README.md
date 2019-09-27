- Vue
  VueRouter 路由
  Vuex 数据流


  ElementUI PC框架
  MintUI/IVIEW mobile

  插件
  Vue 瘦身 MVVM
  其他的都是他的周边生态
  插件机制往里面加

  Vue.use(plugin)
  plugin 按一定的规定
  this.$route
  Vue.prototype 原型链上

- ElementUI 有两种引入组件的方式
  <el-button />
  Vue.component(component.name, component) // 声明一个全局组件
  const components = []
  components.forEach(
    (component) => {
      Vue.component(component.name, component)
    }
  )
  ElButton

- 写一个 vue 组件， 开源的插件 100+
  {
    install: function () {
      Vue.component(component.name, component);
      Vue.prototype.$message = Message;
    }
  }
  Vue.use(plugin)   执行 install