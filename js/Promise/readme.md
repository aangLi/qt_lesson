## Promise

由于 JavaScript 是一个单线程的语言，其中就存在着很大的异步问题，存在异步的代码都是有漏洞的。有时候可能无法按照我们正常的逻辑思维执行代码，这就是异步的锅。
通过 Promise 可以很好的控制这种情况， Promise 函数有两个参数 reject 和 resolve
- reject
    表示拒绝，就意味着执行不成功，由 Promise 函数携带的一系列后续代码将都不会执行。
- resolve
    表示接收，就意味着执行成功，同时将成功的结果返回到下一个函数中。

一般情况下 Promise 函数都是结合 then catch 使用。