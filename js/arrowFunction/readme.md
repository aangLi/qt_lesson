##
1. 箭头函数 不支持重名形参，普通函数可以。
2. 箭头函数 没有 this 箭头函数 this 指向定义时候所处的上下文（外部函数）的this。
    call apply 不能改变 箭头函数 this 的指向。

## 类数组
1. length 
2. 索引 获取值。
arguments 转化为真正的数组。1. Array.from();
2.Array.prototype.slice.call(arguments); // 截取数组。依次截取。

## this
调用的时候 确定下来的