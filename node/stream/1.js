const fs = require('fs'); // 文件模块
// IO
fs
    .createReadStream('./sample.txt') // 创建一个可读流
    .pipe(process.stdout); // 输出设别的一种 交互，构建一个管道 process.stdout