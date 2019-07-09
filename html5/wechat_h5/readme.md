- input标签
    1. 默认 outline 不为 none
    2. 默认设置有边框痕迹

- padding 与 margin 的区别
    padding 相当于 使得自己的体积变大
    margin 相当于 使得自己的体积变小

    box-sizing: border-box 防止padding 向外扩充，只能在本身盒子的大小内进行扩充

- overflow: hidden; 隐藏超出盒子的内容

- flex 布局
    如果针对 flex 布局 单独设置一个盒子的flex:1 是将所有其他没有设置flex属性的标签所占内容去掉的剩余内容进行划分

- 设计页面的技巧
    1. 确定总体的布局格式 上下分布 左右分布 
    2. 对每个部分的内部进行布局格式的逐步细化、分析
    3. 先将内容规划好，再对标签进行 css 设计

- chrome 最小显示字体为 12px IE 最小显示字体为 14px
    浏览器的默认字体大小为 16px

- position:fixed
    1. 该布局方式是指相对于屏幕视口(viewport) 的位置来指定其位置。并且元素的位置再屏幕滚动时不会改变
    2. 当元素的祖先transform 属性非 none 时，定位容器由视口该祖先
        1. 任何非 none 的 transform 值都会导致一个堆叠上下文(Stacking Context) 和包含块 (Containing Block) 的创建
        2. 由于堆叠上下文的创建，该元素会影响其子元素的固定定位。设置了position:fixed 的子元素不会基于viewport 定位，而是基于这个父元素