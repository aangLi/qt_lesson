- html5 语义化
- 良好的html 结构
- 取名
- 复用

- 路径 ../ 上一级 ./ 相对路径 / 绝对路径 (web server)

- 前端词汇量
    page 代表整个页面容器
    content 代表整个页面容器的内容
    header 头部
    footer 底部
- 经典结构 h5 经典语义化标签
    header + content + footer
- 弹性布局纵轴 + flex:1
- 不要重复代码
- 到底以哪一个为设计稿 PSD 750px 相当于 375px retina
    750  400  200/375*100% 等比例缩放
- max-width + margin:auto 给我们带来移动设备到iPad，pc的扩展 碎片化的终端
- 移动端水平禁用滚动条 垂直方向 overflow-scrolling：touch 滑动更加的顺滑
    -webkit 浏览器前缀 -ms 微软浏览器 -moz 
    手机端 webkit safari android chrome
- input
    手指交互 35+
    border 0
    输入不要顶格 text-indent 属性
    search 居中 
    图标用用背景做的 url base64 no-repeat 15px
    backgroud-size 

- browser-sync
    yarn global add browser-sync 
    可以同步到显示社会中 也可以进行自动刷新
    browser-sync start --files "*" --server 启动