- 单例模式，是设计模式的基本模型
    不管 new 多少次，永远返回一个对象。 因为闭包区域内部的变量不会被回收。
    instance

- 立即执行函数 + 闭包
    instance 改成全局？
    var instance = null; // 污染命名空间， 容易被修改值
    function Singleton() {
        if ( instance )
            return instance;
        return instance = this; // 被new的一刹那被创建出来的
    }

const Singleton = (function() {
    // 闭包 closure
    let instance = null; // 闭包区域 不会被垃圾回收
    console.log('-----------------');
    return function() {
        // constructor
        console.log('--------new');
        if (instance) {
            console.log(instance)
            return instance;
        }
        return instance = this;
    };
})();

立即执行函数返回函数，是构成闭包 这一个 js 核心理念的 常用手段，
闭包函数，是曾经被闭包过的。
闭包函数 是 生产环境 立即执行函数，创造闭包环境。在闭包环境之中的变量一直都在， 不会被回收。
闭包函数在运行时，可以引用到生成时的闭包环境中的上下文。