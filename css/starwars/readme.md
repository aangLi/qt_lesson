## emmet 快捷输入
vscode 来自微软，内置了emmet插件
- 使用css选择器来快速的语法
    1. 类名选择器 .className
    2. > 父子选择器
    3. + 兄弟选择器
    4. [] 属性选择器
    .starwars-demo>img*2[src="./images/.svg]

- 定位
    1. css 布局的一种
    2. position:absolute;
    3. position:relateive; body 是最顶层的相对定位
    4. 父级或一直往外查找，如果有定位元素，相对最近的长辈元素定位，否则就是body

- transfrom
    1. 变形属性 translate 移动 | scale 缩放 | rotate 旋转
    2. 三维世界 perspective 视点与屏幕的距离
    3. transform-style: perserve-3d;
    4. 先写perspective再写transform-style: perserve-3d; 才能实现效果

- 配置node
    1. npm install -g live-server 设置网页自动刷新根据代码的保存全局安装
    2. npm config set registry https://registry.npm.taobao.org 设置淘宝员，使得通过命令行下载外国服务器内容更快
    3. 点击项目目录在TERMINAL中打开，然后通过dir访问该项目目录下的所有文件，再输入live-server

- npm node 的工具包管理
    1. live-server 静态网页提供了web-server 热更新 （保存直接更新页面）
    2. npm install -g liver-server
    3. js 的命令行工具 运行在服务器端