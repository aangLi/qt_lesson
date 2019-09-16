## 学习收获
    今天简单的开发一个去哪儿的 vue 项目， 我们来看看其中有些什么收获。

1. 移动端 click 事件 延迟
    1. 原因：移动端有个双击事件
    2. fastClick 解决 click 事件的延迟
2. vue 项目搭建
3. 组件划分

static 文件夹是静态资源服务器， 获取本地资源
components: {
    HomeHeader,
} 配置组件， 在 export default 中配置

## webpack
打包成一个文件， 通过 main.js 文件 查找所有的组件和页面。
scss 不认识
