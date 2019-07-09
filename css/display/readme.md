- 行内块级元素
    1. 行内元素不能够设置宽和高，行内块级元素可以设置宽和高。
    2. 行内块级元素被设为浮动对象时，会出现空间间隙的情况，照成原因是代码的换行所致，本质原因是由于字体的大小问题。
        解决方案：将设置浮动的盒子字体设置为0，其子盒子内部再设置字体的大小。

- 居中的方法
    1. 绝对定位 position
        position:absolute;
        top:50%;
        left:50%;
        transfrom:translate(-50%,-50%);

    2. 通过 margin 的方式
        margin:0 auto; 自动左右居中。
        margin-top:计算; 进行上下居中。

- flex布局
    1. flex-wrap:wrap; 自动换行。
    2. 脱离文档流( float , position )
    3. flex属性 flex(0 0 200px)
        flex-grow 放大比例
        flex-shrink 缩小比例
        flex-basis 分配空间 每个子元素的分配空间

- align-content 和 align-items 的区别
    1. align-content 指的是多行居中，将多行看成一个整体居中在盒子内部
    2. align-items 指的是单行的居中，即使有多行但是每行是独立存在的，按照弹性布局等比例分布的居中。