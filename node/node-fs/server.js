let http = require('http') // 引入 http 这个核心功能块，来创建 web 服务器
let fs = require('fs') // fs 操作服务器的资源文件

let server = http.createServer()
server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/hy.jpg', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('你要的资源不存在，请稍后再试！')
      } else {
        res.setHeader('Content-type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})
server.listen(3000, () => {
  console.log('服务器已启动')
})