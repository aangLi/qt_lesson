- css 浪费时间的地方
    1. {
        key:value;
    }

    css 编译 stylus

- npm install -g stylus stylus 的安装 css 开发神器
    1. 支持定义变量
    2. 支持循环 函数 嵌套
    3. stylus 是 css 预编译，用 stylus 语法来写 css 省去了很多不需要的步骤，其他一些高级功能
    4. 以后写.styl文件 浏览器要的是css
    5. pwd 确定当前目录所在
    6. stylus common.styl -o common.css 文件格式转换
    7. stylus -w common.styl -o common.css 时刻编译，文件不会退出

- 多线程编译
    live-server
    stylus -w common.styl -o common.css

- 界面第一步是写结构，最重要的
    1. 脱离分析标签表面的低级趣味 从内到外
    2. 盒子 从外到内
    main.container>ul.tag-list>li.item>.tag>.info-box+action.box
    3. 写结构 不要去管css样式
    4. 语义化，用合适的标签
    5. 完整、正确、语义化结构良好