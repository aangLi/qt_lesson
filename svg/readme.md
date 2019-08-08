- 数据可视化
SVG + Canvas
图片是由像素点构成，放大后会变得模糊，SVG 是一个矢量图，可以无限的等比例放大，填充像素点。
1. circle svg 里的数学图形标签
    cx, cy, r
    xmlns = xml(数据格式 html是xml的web版本 <html></html>) + ns(namespace svg 数学图形的xml标签定义)

- stroke 是 Canvas 和 SVG 中边框的绘制属性
    stroke 描边 借鉴border dashed 的理解。
    stroke-dasharry: 一个参数是表示平均分布，两个参数 第一个为实现长度，另外一个是虚线长度。
    stroke-dashoffset: 10; 偏移量