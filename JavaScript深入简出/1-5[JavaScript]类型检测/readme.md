## 类型检测

# typeof
1. typeof 方式进行检测， typeof 方式适用于基本类型 number，Boolean，string，undefined，function 但是面对 null 值时，返回值会是 object。
2. 面对 检测 null 值 会返回 object 的问题，是由于历史问题，在规范标准内没有将 null 返回值设置为 null。

# obj instanceof Object
1. obj 表示为实例对象，如果 obj 为基本类型将直接返回false，Object 表示为原型对象（类，函数构造器，函数对象），instance 主要的思想是原型链，也可以称为继承。
2. 作用是弥补 typeof 的缺陷，不能够精确的返回类型值，例如数组、null、自定义对象等。
3. 检测数组实例：[1,2,3] instanceof Array 返回结果 true
4. 针对自定义类型的检测：
    1. 通过构造函数创建 Student 和 Person 两个原型对象
    2. 设置构造函数中原型类型，从而构建 Person 和 Student 的继承关系
    3. 通过 instanceof 进行校验，发现 instanceof 可以考虑原型链的情况，能够追溯到其父类进行类型的匹配。
5. 注意 不同的 window 和 iframe 不能进行 instanceof 的校验，因为 JavaScript 是以引用来判断，只有完全一样的才可判断，而不同的window 或者 iframe 代表着有区分，不能进行判断。

# Object.prototpye.toString
1. 该类方法是介于方法一和二之间的，该方法能鉴别数组，但是无法鉴别自定义对象。
2. 在IE(678)的情况下判断null 依然是返回 object

# constructor
1. 通过调用实例对象的constructor 的函数来验证
2. 注意这种方式 constructor 很容易被改写，使用时需要小心
3. person1.constructor = Person // true

# null 与 undefined
1. 通过 if 条件语句判断可以认为 null 和 undefined 是同类型的 返回 true
2. 通过 typeof  instanceof Object.prototype.toString 三种方法都认为该两种类型是不同的

# undefined
- undefined 特殊的例子 在浏览器console的情况下
    1. var eye
    2. eye
    3. return undefined
    4. age
    5. 报TypeError错误
    6. typeof(eye) 与 typeof(age) 都返回 undefined
    7. 方法 instanceof Object.prototpye.toString 都不支持 typeof(age) 类似的效果，也就是会报错

# Boolean 
1. Boolean() 函数会将 undefined null 类型的变量 自动转变为false 其余大部分会转化为 true
