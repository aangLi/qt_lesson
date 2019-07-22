const canvas = document.querySelector('#draw');
console.log(canvas);

// canvas 基本步骤
const ctx = canvas.getContext('2d');
// 绘画环境

// window 属于 BOM Browser Object Model
// DOM Document Object Model
// window(js 的最大)
// document (属于获取标签等DOM树一切的最大的) 地址栏 窗口大小 前端数据库

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 2 ;

ctx.strokeStyle = '#BADA55'; //描边颜色
// 画线宽度
ctx.lineWidth = 100; 
// 两线连接有圆角
ctx.lineJoin = 'round';

ctx.lineCap = 'round';

// 全局的变量

let lastX = 0,
    lastY = 0,
    isDrawing = false,
    hue = 0,
    direction = true;
// //起始位置
// ctx.moveTo(100,100);
// //终点位置
// ctx.lineTo(200,200);
// //生成
// ctx.stroke();

// offsetX offsetY 偏移量
function draw(event){
    // console.log(event.offsetX,event.offsetY);
    if(!isDrawing) return;
    // hsl 颜色饱和度来绘制颜色

    ctx.strokeStyle = 'hsl('+hue+', 100%, 50%)';
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;

    hue ++;
    if(hue >= 360)
        hue = 0;

    if(ctx.lineWidth >= 100 || ctx.lineWidth <=1){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth ++;
    }else{
        ctx.lineWidth --;
    }
}

//事件监听 回调函数 执行功能
canvas.addEventListener('mousedown',function(event){
    // console.log(event.offsetX,event.offsetY);
    isDrawing = true;
    // Boolean mousemove 要画
    lastX = event.offsetX;
    lastY = event.offsetY;
});
//画完
canvas.addEventListener('mousemove',draw);

// canvas.addEventListener('mouseup',function(event){
//     isDrawing = false;
// });

// => 箭头函数 箭头的右边表示函数体
canvas.addEventListener('mouseup',() => isDrawing = false);
// 超出了容器的边界
canvas.addEventListener('mouseout',() => isDrawing = false);