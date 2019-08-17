- prototype 的三角恋
    构造函数(constructor)   构造函数的原型对象 {}
    Person.prototype = {}
    Person.ptototype = {}

    es6 class 只是语法的改变
    Person 构造函数 都会有 prototype属性
    函数式语言。
    实例会通过 prototype 属性 对象拿到所有的方法。

    Person.prototype.constructor = Person();
    Person 1=>n person
    pseron      Person.prototype
    如何拿到原型上的方法。
