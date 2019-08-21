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
// 实例 return 单例模式
const a = new Singleton();
const b = new Singleton();

console.log(a == b);