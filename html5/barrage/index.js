let data = [
    { value: '周杰伦 - 听妈妈的话', time: 5, color: 'red', speed: 1, fontSize: 22},
    { value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 6 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 8 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 35 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 20 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 18 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 10 }
]

// 获取需要的用到的所有DOM结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建CanvasBarrage类
class CanvasBarrage {
    // constructor是一种用于创建和初始化class创建对象的特殊方法    构造器
    constructor(canvas, video, opts = {}){ //opts = {} 为了提高代码的容错性 如果没有传值也不会报错 ES6 新

        if(!canvas || !video){
            return;
        }

        //直接挂载到this上
        this.video = video;
        this.canvas = canvas;

        //设置 canvas 的宽高和 video 一致
        this.canvas.width = this.video.width;
        this.canvas.height = this.video.height;

        //获取画布，操作画布
        this.ctx = canvas.getContent('2d');

        //设置默认参数
        let defOpts = {
            color:'white',
            speed:1.5,
            opacity:0.5,
            fontSize:16,
            data:[]
        };
        
        // ES6合并两个对象的方法 Object.assign() 将其全部挂载到this上面
        Object.assign(this,defOpts,opts);

        // 添加一个属性来判断当前是播放状态还是暂停状态
        this.isPaused = true; //默认为暂停状态
        //得到所有的弹幕消息，构造函数 一般是new 出来的
        this.barrages = this.data.map(item => new Barrage(this, item));
        //渲染         
        this.render();
    }

    //渲染canvas绘制的弹幕函数
    render() {
        //清除画布
        this.clear();
        //渲染弹幕
        this.renderBarrage();
        // 如果没有暂停的话就继续渲染
        if(this.isPaused === false){
            // 通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this));
        }
    }

    //清除
    clear(){
        // 清除整个画布的内容
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    //渲染弹幕的方法
    renderBarrage(){
        // 首先拿到当前视频播放的时间
        // 根据该时间来和弹幕要展示的时间做比较来判断弹幕是否要展示
        let time = this.video.currentTime;
        
        // 遍历所有的弹幕
        // 改进出栈入栈
        this.barrages.forEach(barrage => {
            //用一个 flag 来处理是否渲染，默认是false
            if(!barrage.flag && time >= barrage.time){
                // 判断当前弹幕是否有过初始化
                // 如果isInit还是false, 那就对当前弹幕进行初始化
                if (!barrage.isInit){
                    barrage.init();
                    barrage.isInit = true;
                }
                // 弹幕要从右往左渲染，所以x轴的坐标减去当前弹幕的speed即可
                barrage.x -= barrage.speed;
                barrage.render(); // 渲染当前弹幕

                //如果当前弹幕x的坐标笔自身的宽度比自身的宽度还小，就表示结束渲染
                if(barrage.x<-barrage.width){
                    barrage.flag = true;
                }
            }
        })
    }

    //添加弹幕的方法
    add(obj){
        // 实际上就是往 barrages 数组里面添加一项 Barrage 的实例
        this.barrages.push(new Barrage(this, obj));
    }
}


//创建Barrage类，用来实例化每一个弹幕元素

// 1. 获取内容、时间、颜色、速度、大小
// 2. 对内容进行设置
// 3. 将内容加入到canvas
// 4. 设置内容的动画效果