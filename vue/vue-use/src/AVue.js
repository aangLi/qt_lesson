import Vue from 'vue';
// install 方法需要引用 vue

function AVue ({methods}) {
  for (let key in methods) {
    this[key] = methods[key];
  }
}

AVue.prototype.$alert = () => {
  document.write('我是AANGLI');
}

Object.defineProperty(Vue.prototype, '$alert', {
  writable: true,
  value () {
    console.log('我是真的AANGLI');
  }
})

export default AVue