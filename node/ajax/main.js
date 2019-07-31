// live-server 一样的功能
// index.html http 访问的支持 文件 至 web server
const http = require('http');
const fs = require('fs');
// web server 一直伺服 3000
// 向request 返回资源 response 
const inFile = fs.createReadStream('./index.html');


const server = http.createServer((req,
    res) => {
        // res.end('hello world');
        // index.html 显示出来
        // req 浏览器 访问网站的代理
        if (req.url == '/') {
            inFile.pipe(res);
        } else if (req.url == '/userInfo') {
            const info = {
                'name': 'AANG_LI',
                'desc': '111111'
            }
            res.writeHead(200,{
                'Content-Type':'text/plain;charset=utf8'
            })
            res.end(JSON.stringify(info));
        } else {
            res.end('hello world');
        }
});

server.listen(1314);