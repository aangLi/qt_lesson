## 需要引入组件 到 不需要引入组件
1. html 结构
  和页面的主体内容是同级的，并不弱于页面的主题内容， 不应该嵌套在页面里面

## 面向对象
编程的范式， 解决一类问题， 最后 new 的时候具体到一个类型上面

定义一个 vue 组件 <template> <script> <style> 这三部分就是相当于一个对象中的构造函数。

## 1
import Toast from '';
<Toast />

## 2
手动拿到 Toast 构造函数
vue.extend()
生成了一个 Toast 的实例
showMessage()
