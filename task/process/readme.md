## 深入理解Node.js 中的进程和线程

- 前端的角度 来看待进程与线程
- node 进程 子进程 cluster  多核CPU的利用
- pm2 线上node 运行进程管理
- docker 容器
- k8s

1. 从前端角度开始
  Node.js 是单线程吗
  不是
  js 是单线程 html， css， js， .vue, .jsx, koa
  基于事件机制 evnet loop 回调 李刚一个解决了能力
  单线程 js
  ajax  ？  微软公司
  新的线程创建出来的  ajax  单线程
  js 是单线程的 但是js的宿主浏览器（容器）， 多进程的 （http并发 img css html js）， 多线程
  注册再主线程 event 时间里
  线程是可以相互通信

2. node 当前的 main.js 进程 《=》 ， process pid
  服务器端天生就是多线程的， 分布式的
  js 再服务器端执行
  node 是服务器端js执行的 容器 node 是多进程的 node10 ， 多线程
  单线程 异步 IO 高性能高并发