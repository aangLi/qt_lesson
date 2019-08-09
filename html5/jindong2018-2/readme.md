##
SEO: 搜索引擎，浏览器会爬去整个网页的内容，为了 SEO 我们放文字，为了美观 放图片。
场景：网站的logo

## css 选择器 优先级
!important 是最高的
style (1000)
id (100)
class (10)
元素 | 伪元素 (*) (1)
#box span.active 111
#box span 101
同等 优先级 按照css 定义的顺序后出现的覆盖先出现的。
'''css
.red {color: red}
.blue {color: blue}

<span class='blue red'></span>
'''

## animation-fill-mode
forwards
none
backwards 动画开始前，将元素的样式设为动画第一帧
both: forwards + backwards

## skew
保持两边平行，进行拉伸，压缩内部的解构使得其变形。x 为正值 X轴不动Y 轴改变，倾斜的改变 为正值则逆时针旋转角度。反之顺时针旋转角度，
Y为正值，Y不动，X顺时针。反之X逆时针