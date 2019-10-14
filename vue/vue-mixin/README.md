## vue-mixin 插入
如果有公共的使用组件，可以通过mixin进行插入
组件之间，公共逻辑的抽离

缺点：
mixins
'''
methods: {
  open() {},
  close() {}
}
'''

组件里面：存在同名的方法