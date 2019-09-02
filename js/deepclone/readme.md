- 为什么所有的公司都考这道题
- 性能优化
    1. chrome 自带的性能优化工具
        - console.warn 
        - console.error
        - console.time('for-in') console.timeEnd('for-in') 为 for in 计时 顺序执行 瞬间执行
        - Object.keys() 获取键值

    2. for key in 性能不太好 用 for 代替， while 最快

- 浅拷贝
    返回的对象，并不是独立的新对象，跟只管理解有差异。
 
- 浅拷贝 深拷贝 规避内存指向同一地址问题
    返回新对象 JSON.parse(JSON.stringify())
    - 如果无法通过这个方法进行拷贝。
        将会设置为 undefined ， 不会进行自动转化为字符串， 必须是一些简单的 key value 或者可以迭代数组进行转化。例如函数 function() {} 不能进行深拷贝 解决大部分问题

- 递归
    当如果一个大的问题， 由多个 类似 (clone) 问题构成，并且，有一个退出条件
    clone 多个JSON嵌套 由内到外的一层层解决
    一层时， 直接返回