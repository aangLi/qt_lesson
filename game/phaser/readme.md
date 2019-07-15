- js 依赖的函数
    callback 回调函数 
    addEventListener(event_type, callback);

    定义事件的时候，不执行，声明一个函数
    注册到js事件模型

    事件发生时，将注册的回调函数，进行调用 js典型的异步 

- fs 文件模块
    fs.readFile(路径，编码方式，回调函数(错误参数，数据参数))
    异步是需要花时间的，注册行为，callback

- 操作系统
    addEventListener 事件操作 
    I/O操作 Input/Output CPU(运算和指令集) 内存，外部存储设备 外部存储的读取操作 是计算机典型的慢操作

- 游戏框架
    http://phaser.io/examples/v3/view/depth-sorting/isometric-map