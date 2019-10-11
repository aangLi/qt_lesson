- vuex 数据流
组件 + 共享数据
1. 共享状态
- this.$stroe
  Vue.use(Vuex) vue.$store
- this.$store.state
  new Vue({
    store
  })
  store = new Vuex.Store({
    state,
    ...
  })


  myVuex Vue.use()
  new myVuex.Store(options)
  options 四大家族

- es6的模块化机制
  export defalut xxx
  index.js Vuex { Store, }
  class get 方法
  Store是一个类， 四大家族是他的属性
  this.$store 对vue.prototype扩展之后， 所有的组件都可以调用 Vue 钩子函数， beforeCreated 除了她该做的，再坐下vuex的初始化
  Vue.mixin({
    beforeCreated: 
  })
  让唯一的$store对象，state是属性 beforeCreated vue 该怎样，再多this.$store = 
  this 就是指 Vue单例 根组件
  beforeCreated 之前的代码也要运行，Vue.mixin({
    beforeCreate: vuexInit
  })
  通过源码 认识到 所有组件都可以访问$stre, 是因为它已经为 vue 单例加入了这个属性
  每个组件里的 this -> 本组件 -> prototype -> vue 单例

- this.$store.getters.XXX
  和state不一样的地方 是方法会返回根据state的新的值

  Object.defineProperty(this.$store.getters, XXXX, {
    get () {
      数据劫持
      return store.options.getters[xxxx]
      return getterFn(store.state)
    }
  })

  defineProperty 是一个个属性定义[key, fn]
  forEachValue(key, fn)
  regiterGetter(this, key, fn)