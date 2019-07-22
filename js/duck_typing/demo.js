// 国王 鸭子合唱团 1000

//合唱团 1000
// typeof 显示变量属性 万事万物皆为对象

const chior = [];

// 方法
function joinChior(animal){//参数
    // 检测
    if(chior.length < 1000){
    //加入合唱团
        chior.push(animal);
    //数量达到，返回
        if(animal.length == 1000)
            return 'success';
    }

}

//用花括号代表一个对象，js 对象字面量来描述一个对象
// talk in js 

const duck = {

    type: '鸭子',//属性
    sex: '公',

    duckSing: function() {//动作
        console.log('嘎嘎嘎');
    }

}

joinChior(duck);