// console.log("鸭子模型");
// console.log("duck");
// 服务器 http://localhost:8080/

// http协议
const http = require('http');

//启动一个服务器
const server = http.createServer((req,res) => {
    res.end('hellow,world');
});

server.listen(9376);

// js的设计模式