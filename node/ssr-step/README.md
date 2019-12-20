## 组件，既可以在客户端，也可以在服务端运行
同构 既可以在客户端，也可以在服务端运行
首屏直出：SPA
  1. <div id="app"></div>
  2. js
  3. js html
SSR（但是服务端不能绑定事件）
  1. <div id="app">内容</div>
  2. js addEvent 
FP: first-paint 有像素落点的时候
FCP: first-content-paint 有内容渲染的时候
FMP: first-meaning-paint 有意义的内容
TTI: time-to-i 可交互
DCL: dom-content-loaded  dom解析完成的时候
L: load 这个页面资源全加载完成时

虚拟
服务端：生成 html
客户端：负责事件绑定

SPA：html 事件 在客户端

## JEE ejs
服务端渲染

## node
1. 服务端渲染
2. webpack babel 工具
3. 中间层（BFF）
   client  /buy  server
   问题：
   /num    1
   /login  2
   /buy    3
   解决：
   node: backend for front
   get('/nodeBuy', async () => {
     // 内网请求
     // 速度理论上限
     // rpc
     get('/num') login buy
   })
   // 非必要
   rpc：romote process call


## store
用户请求： 生成 带有 数据的 html
目的： 用户当前访问的这一页的数据， 都由后端生成在 html 里面


## ssr 理解
首先 ssr 是服务端渲染， 其中有一个很关键的东西 同构思想，
- 同构
  就是 服务端和客户端都可以运行
- 如何达成服务端和客户端都可以运行
  通过 路由匹配（js 绑定）和返回HTML结构 
- store 每个用户访问都要 产生一个新的 store
  这个 store 首次访问是数据库发送给客户端 
  客户端进行 渲染的时候 发现需要  默认数据和 显示数据不一致 将会展示默认数据
  这个时候需要在 获取 客户端的 store的时候 将默认数据进行修改
  修改值需要提前放入到 script 内部
