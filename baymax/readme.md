- 伪元素
    1. 不用标签，在css中使用:before :after 来声明，可以像正常的标签一样使用
    2. 再做分割线， > 箭头，不用标签很方便
    3. - :before
        元素内容开始之前 
       - :after
        元素内容结束之后

        都需要设置 content 属性，设置过后才能显示在屏幕上面

- css3 带来炫酷
    radial(环形) | linear(线性)-gradient(渐变)(渐变开始的位置 circle at center , color stops ... #fff 50%,)

- 相对单位
    em 相对单位 自身字体大小

- 伪元素 天生是行内元素，不可以设置 width * height ，天生是由内容撑起来的
    可以改变 display:block; position:absolute 可以设置宽高 自动设置为display:block;