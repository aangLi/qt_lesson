const fs = require('fs');
// I/O操作 找文件 相对路径 ./ 读取内存 控制台输出读取的内容callback
// 异步的概念 callback 匿名函数是没有名称的函数 


// 读取文件的回调函数 第一个参数是错误 第二参数是数据
// 若没有出错 第一个参数为空
// 出错 将会报错
fs.readFile('./index.html','utf8',(error,data) => {
    // if(error){
    //     console.log(error);
    // }else{
    //     console.log(data);
    // }

    if(!error){
        console.log(data);
    }
});