1. id 选择器的权重比 class 高 !important 权重最高
2. transform 只要针对属性的变化就有个过渡的效果
3. white-space: nowrap 表示段落中的文本不换行
4. text-overflow: clip(修剪文本) ellipsis(用省略号代表被修建的文本) string(用给定的字符串来代表被修剪的文本)
5. display: -webkit-box 适用于 Safari、Opera 以及 Chrome
    display: -moz-box 适用于 Firefox
    box-orient: vertical 是表示子元素的垂直居中
6. vertical-aligin 表示该元素于父元素的位置
    1. baseline	    默认。元素放置在父元素的基线上。
    2. sub	        垂直对齐文本的下标。
    3. super	    垂直对齐文本的上标
    4. top	        把元素的顶端与行中最高元素的顶端对齐
    5. text-top	    把元素的顶端与父元素字体的顶端对齐
    6. middle	    把此元素放置在父元素的中部。
    7. bottom	    把元素的顶端与行中最低的元素的顶端对齐。
    8. text-bottom	把元素的底端与父元素字体的底端对齐。
    9. %	        使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
    10. inherit	    规定应该从父元素继承 vertical-align 属性的值。