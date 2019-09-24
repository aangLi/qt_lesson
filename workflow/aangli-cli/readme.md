手写一个 vue-cli
- npm install -g vue-cli 安装？ 发布到npm 应用市场
- vue init webpack
  vue 是一个 npm 包， npm
  aangli-cli 注册到 npm config ls -l prefix
  vue 全局的 npm 包 init command
  webpack 参数1 process.env[3] process.env[4] 项目名

- 脚手架
  github 模板拉下来 npm 包可以做 
  在下载中...
  进度条...
  完成   异步的过程 Promise async await 来解决

- es6 => es5
  stylus -> css
  workflow 工作流 前端现在的一类岗位
  babel 现代 js 新的特性快速来到开发中的核心
  通过它的插件来帮我们降级或者打补丁
  polyfill  import ()

  const a = 1;  /src
  var a = 1;  /dist
  
  yarn add babel-core // 做事的 babel-preset-env // 预编译
  yarn add babel-cli
  yarn add babel-plugin-transform-runtime // 专门处理 import 模块
    /src 开发目录
    /dist 结果目录

    npm run compile

    watch 是监听

    npm link 会把我们的 bin 联系到 全局的 npm 包里面

    软连接
    是临时作用
    commander 对于命令行的处理

    yarn add ora