## 
1. 默认 position: static;
2. position: absolute;
3. 相对于父级第一个 非 static 定位的元素


## linear-gradient
1. 渐变角度 默认角度为 to bottom
2. 0deg 为 to top
3. 180deg 为 to bottom
4. 渐变线 有向线 在中间 可以通过调试角度来构造不同的颜色效果

## 适配
1. transform: scale(0.5);
2. 通过缩放来适配不同的设备

## url() 小技巧
1. 一般编写为 //xxx.png 不带有协议
2. 自己补全 同时可以根据协议的变化 而自动补全
3. http http:
4. https https:

## position
1. position 脱离文档流
2. 动画就是 css 属性的改变，当一个 css 属性改变的时候浏览器将其绘制再页面上
3. 让其它元素受到该元素的影响

## animation
1. 可以用 , 隔开 放置两个动画
2. step(n) 表示经过几步完成一个阶段的动画效果
3. reverse 表示阶段从最后开始
4. forwards 表示动画效果停留再最后一帧