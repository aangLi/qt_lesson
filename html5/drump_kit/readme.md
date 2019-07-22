- vh
    1. viewheight 等比例的高度
    2. 100 分 多设备适配问题

- flex 布局，重要的布局方式，弹性布局
    1. 可以在弹性空间中防止，特别适合于移动世界，
    2. 取消flex 布局，子元素会变成竖的？
        子元素都是div，块级元素 天生换行
        flex会改变块级元素 天生换行的特性
    3. display 显示 flex 弹性布局 block 块级属性 换行inline 内联属性 表示不换行
    4. align-items 纵轴控制 justify-content 横轴控制 仅仅正对弹性布局

- 盒子模型
    1. 了解元素在页面上的表现
    2. 盒子模型 = 内容（w/h）+ 内间距（padding）+ 边框（border）+ 外边距（margin）+ position

- rem 根据html的字体大小来等比例
    1. 1rem = html font-size 10 px

- data-* 表示自定义属性
    1. 自定义属性可以使得页面更加的高效
    2. 自定义属性和id的比较，id使得DOM树更加的复杂，id相当于DOM树上另外增加的属性，而data-*属于DOM树本身的属性
    3. data-*获取方式
        1. 通过document获取与赋值
            document.getAttribute('data-*')；
            document.setAttribute('data-*',value)；
        2. 通过js5中的dataset获取、赋值与删除
            dataset是一种方法存在于某个对象当中
            
            获取 data-* 属性值
            对象.dataset.*;
            若*为data-of-value模式使用dataset时其自动会转换为驼峰模式 dataOfValue 
            
            删除 data-* 属性值
            delete 对象.data-* 
            对象.data-* = null;

            赋值 data-*
            对象.dataset.* = value;
    4. data-* 属性选择器
        document.querySelectorAll(css selector)
        document.querySelector(css selector)

- transition 过渡
    过渡属性 all(使用标签范围) .7s (time) ease | ease-in | ease-out | ease-in-out (slow to fast of way) 
    1. transition-property 等于 作用css属性的名称，当css属性变化时生效
    2. transition-duration 过渡的持续时间
    3. transition-timing-function 过渡的方式
        ease 慢速开始 中间快 慢速结束
        liner 匀速 cubic-bezier(0,0,1,1)
        ease-in 慢开始
        ease-out 慢结束
        ease-in-out 相当于 ease cubic-bezier不一致

        cubic-bezier 表示三次贝塞尔曲线 cubic-bezier(x1,y1,x2,y2)
    4. transition-delay 过渡生效的延时
        当css属性改变时，过规定时间在生效过渡方式        

- js 中 keydown 按键摁下和弹起
  js 中 transitionend css 中 过渡结束