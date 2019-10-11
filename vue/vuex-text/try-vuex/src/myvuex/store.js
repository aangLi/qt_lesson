// 实例是否是  this.state
export class Store {
  constructor(options,Vue) {
    console.log(this, options);
    // 让this.$store 
    // 找到.state
    this.options = options
    this.getters = {}
    // 扩展vue
    // new Vue({
    //   store
    // })
    Vue.mixin({
      beforeCreate: vuexInit
    })
    forEachValue(options.getters, (getterFn, getterName) => {
      // console.log(getterFn, getterName)
      registerGetter(this, getterName, getterFn)
    })
  }
  // this.$store.state.count 
  // 在获取的同时还可以做其他的事情
  get state() {
    console.log('get ')
    return this.options.state;
  }
  set state(val) {
    throw new Error('不可以直接操作')
  }
}


function vuexInit () {
  const options = this.$options; // vue中有options 将 options 赋值一遍
  console.log(this, this.$options)
  if (options.store) { // 已有
    // this指向vue
    this.$store = typeof options.store === 
    'function' ? options.store():options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}

function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

function registerGetter(store, getterName, getterFn) {
  // 数据的劫持
  Object.defineProperty(store.getters, getterName, {get : () => {
    return getterFn(store.state)
  }})
}
