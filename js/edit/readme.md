- document.forms 是表达的树集合。
- 如果我们有好多信息要从用户收集
    表单不要太长。 如何让表单更加易用
    移动 分页

- fieldset 来区分
    PC 端， 多个表单 document.forms[] 

- JS 在面向对象中， this 在函数中会改变指向，一般指向调用这个 函数的本身。
  EditInPlace 类 抽象概念
  let editor = new EditInPlace();
  this 指向的是 editor 
  this.staticElement = document.createElement('span');
  this.converToText(); // 即是函数，又是对象的方法 this 会指向对象
  this.staticElement.addEventListern('click', function() {
      this => 对象
      this => this.staticElement 语法定义
      作为事件来执行，内部的 this 执行事件发生的元素
  })

- 函数内部的this是执行函数、方法时动态决定，执行的方式来决定的。
    this.converToText(); // 函数是作为对象的方法被调用

- EditorInPlace  是一个类，constructor + prototype（原型对象）
new EditorInPlace() 对象 new 发生了什么
function EditorInPlace() // 函数首字母大写 构造器
EditorInPlace.prototype = {
    converToText: function() {}
    ...
}

- this 用法
- 代码的组织 attachEvents
- 每个状态准备一个方法。
- 原生 JS