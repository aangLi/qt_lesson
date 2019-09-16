# vue-ele-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## getBoundingClientRect()
获取某个DOM结构的大小和相对于窗口的位置。
## $nextTick() 函数
必须是DOM结构渲染完成后才能执行的一个函数。
## addEventListener('transitionend', done)
对 transitionend 事件进行监听
## 父组件往子组件

## 子组件往父组件
<shopcart ref="shopcart"></shopcart>
_drop (target) {
  this.$nextTick(() => {
   this.$refs.shopcart.drop(target)
  })
}
