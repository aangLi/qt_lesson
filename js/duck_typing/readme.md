- js 运行环境
    1. 浏览器宿主 frontend 前端
    2. 服务器 backend 后端

- npm 包管理器 慢
    yarn 包管理器 来自于 Facebook 快
    npm install -g live-server 功能自动刷新网页
    -g 全局安装
    yarn global add nodemon 自动刷新 node 文件
    yarn global bin 查看安装的路径

    nodemon index.js 运行方式

- js typeof 类型运算符
    typeof duck 返回类型的字符串

    数值 number
    字符串 string
    布尔值 boolean
    null 空 undefined 未定义

    除了这五种类型之外，其他都是对象 object 由属性和方法构成 function array 都是对象
    但是对于 function 进行 类型运算符返回的类型为 'function' 而 array 则返回 'object'
    function 就是一个可以运行的对象而已
    可以通过 function.属性 或者方法来证明它是一个可以运行的 object
    DOM树的节点也是对象

    问题：如何判断是一个数组

- 对象字面量 { key:value.... function(){}... }
    typeof obj object
    
    js 是动态语言，可以在定义完之后再添加属性
    对象字面量 key val () 创建对象很方便
    js 强表现力 UI

- 数组
    