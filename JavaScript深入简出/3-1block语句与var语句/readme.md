## block语句与var语句
- block 语句
    1. 一般情况下 block 语句 （块级）不单独使用，常见都会和 if while 等语句使用
    2. 在 JavaScript 中，没有块级作用域，有函数作用域等，没有块级作用域指的就是在块级内部和在块级外部声明的变量基本上没有差别。当然得在变量声明后进行使用。

- var a = b = 1; 问题
    该问题是在有函数作用域的差别情况下，该种声明两个变量的方法会隐式的创建一个全局的 b 变量。解决方法就是 var a = 1, b = 1;