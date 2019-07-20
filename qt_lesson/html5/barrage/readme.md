- input 标签
    1. text 文本框
    2. password 密码
    3. range 进度条
    4. color 颜色
    5. button 按钮

- video 标签
     <video src="./source/mv.mp4" id="video" controls width="720" height="400"></video>

     controls 是指可以进行控制

- 弹幕的实现主要思想
    1. 设置canvas（画板） 和一个video标签 字在canvas上面运动 canvas 覆盖在video上面

- ES6 新特性 Object.assign()
    1. 将两个对象进行合并
    2. 合并是指后一个覆盖前一个，相同则覆盖，没有则添加，以后面为标准
    3. Object.assign(this,defOpts,opts)

- ES6 新特性 this.data.map(item => new Barrage())
    1. 循环遍历
    2. item 代表一条数据
    3. 最后返回一个数组类型，通过回调函数对于每一个item进行生成Barrage()

- js 之挂载 this
    可以没有先声明就直接挂载，挂载的过程中包裹了声明这个步骤
    问题 this 的作用域
    解答：一般情况下都为全局，也就是window  


- this.render.bind(this)
    修改作用域的指向
    .call .apply 都可以修改作用域的指向
    
- clearRect() 与 clear() 函数的区别
    clearRect(x,y,width,height) 清除矩形的属性
    clear() 清除了文本

- 全屏的方式
    position:absolute
    left:0
    right:0
    top:0
    bottom:0