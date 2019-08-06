- 网页上显示大量的html也是负担
    1. http 请求 3000 伺服状态 Server
    2. / index.html 传输给浏览器 Client
    3. 127.0.0.1 localhost 本地 访问时间超过1.5秒 就会访问不成功
    4. http://192.168.43.140 远程 需要浏览器 访问代理 browser 远程 服务器 （IP ，domain） 伺服状态 live-server 某个端口

- 分页
    1. ?limit= 20&page=1 过去式
    2. html5 来实现
    3. http 是超文本传输协议 文件太大，分几次，等时间长，对大数据做分页
- 服务器的状态码
    1. 首次访问 200
    2. 再次访问 页面没有被修改 则为 304 浏览器具有缓存的能力

- 得益于ES6 的array.FROM({LENGTH: N}, (V,K) => `新闻${}`)  前端模拟大数据
- 按页分割 再次复用 ARRAY.FROM(
    {LENGTH: Math.ceil(arr.length/size), (v,k) => Array.from()}
)