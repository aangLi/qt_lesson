- canvas 用于绘图 Game, 高互动的h5应用

- 绘图API 在 context 上 API 很多，请以现实中画画的方案理解。 canvas.getContext('2d')
    1. 选择一种颜料 strokeStyle()
    2. 选择多粗的笔 lineWidth
    3. 选择画线的风格 lineJoin和lineCap
    4. moveTo() 将起点移动到何处
    5. lineTo() 将终点移动到何处
    6. stroke() 生成图案

- BOM DOM
    window = document + 浏览器赋予的功能 定位+设备摇晃+存储功能localstore cookie+音视屏功能(h5)

- => ES6 中的最新轻盈的函数表示方式
    1. 如果需要多条语句需要花括号
    例如 () => {

    }
    2. 如果没有花括号只能一条语句
    () => isDrawing = false 不能有分号