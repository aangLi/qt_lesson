## 严格模式的注意事项

- 严格模式建议再开头设置，或者在作用域内进行设置，若在使用 'use strict' 的时候前面的出现 非字符串的语法 严格模式将会失效，相当于没有设置严格模式。

// var mm = 1;
'use strict';
with ({x:1})
{
    console.log(x);
}

1. 不允许使用with

with ({x:1})
{
    console.log(x);
}

'use strict';
with ({x:1})
{
    console.log(x);
}
2. 所有的变量都必须声明，赋值给未声明的变量会报 ReferenceError 错误，不再是隐式的创建一个变量

x = 1; 
console.log(x);

var x = 1;
console.log(x);

3. eval 中的代码不能创建 eval 所在作用域下的变量、函数。而是为 eval 单独创建一个作用域，并在返回时丢弃
 - 何为 eval
    eval 是可以计算某个字符串，并执行其中的 JavaScript 代码，但不常用。
    
    eval("x = 20;y = 20;console.log(x + y);"); // 40
    console.log(x); // 20


    'use strict';
    eval("var x = 20,y = 20;console.log(x + y);"); // 40
    console.log(x); // ReferenceError

4. 针对严格模式下函数特殊对象 arguments 是静态的副本，不像非严格模式下，能够直接修改传过来的参数值。

function sss (x)
{
    arguments[0] = 100;
    console.log(x);
}

sss();  // undefined
sss(1); // 100

'use strict';
function sss (x)
{
    arguments[0] = 100;
    console.log(x);
}

sss();  // undefined
sss(1); // 1

- 在严格和非严格模式下 针对下面这种情况都是一致的。

function sss (x){
    arguments[0].a = 100;
    console.log(x.a);
}

sss({a:1}); // 100

5. delete 在非严格模式下 删除一个没有赋值的参数都会返回一个 false , 在严格模式下 删除一个没有赋值的参数 在configurable 属性为 true 时 报错为 SyntaxError 为 fasle 时 报错为 TypeError

!function sss (c) {
    console.log(delete c); 
}(1); // false

!function sss() {
    var obj = {};
    Object.defineProperty(obj,{a:1},{configurable : false});
    console.log(delete obj.a);
}(1); // false

'use strict';
!function sss (c) {
    console.log(delete c); 
}(1); // SyntaxError

!function sss() {
    var obj = {};
    Object.defineProperty(obj,{a:1},{configurable : false});
    console.log(delete obj.a);
}(1); // TypeError

6. 不兼容 8 进制模式

7. 在非严格模式下，一般函数的 this 是指向 null ，严格模式下 指向全局对象

!function sss() {
    console.log(this);
}(1); // undefined

'use strict';
!function sss() {
    console.log(this);
}(1); // Object...

8. 若使用 apply/call，当传入 null或undefined时，this 指向 null 或 undefined，而不是全局对象。

9. 试图修改不可写属性（writable = false），在不可拓展的对象上添加属性时报TypeError，而不是忽略

10. arguments.caller,arguments.callee 被禁用

- caller 是指 调用它函数的对象或者函数
- callee 是指 它本身，也就是对自身的一个引用
- 上述两种情况都要函数被调用的时候才有值 其他情况下都为 null 值

function sss() {
    var obj = {};
    Object.defineProperty(obj,{a:1},{writeable : false});
    console.log(obj.a = 3);
    console.log(arguments.callee);
    console.log(sss.caller);
};

function test() {
    sss();
}
test(); // [Function: sss] [Function: test]
