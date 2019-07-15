const width = 800,
    height = 600;
let back,//背景
    mummy,//僵尸
    anim,//运动对象
    loopText;//文本

// Phaser.AUTO

// 分为三个函数就可以完成游戏的设置
// preload: preload 预加载
//游戏对象

var game = new Phaser.Game(width, height,
    Phaser.AUTO, '#game', {
        preload: preload,
        create: create, update: update
    })


function preload() {
    //预加载
    game.load.image('lazur', './images/thorn_lazur.png');//背景图片
    // 会走动
    game.load.spritesheet('mummy', './images/metalslug_mummy37x45.png', 37, 45, 18);//精灵
}

// 1.游戏对象
// 2.背景等资源
// 3.玩家 player 敌人enmey

function create() {
    // scene
    back = game.add.image(0, -400, 'lazur');
    back.smoothed = false;
    back.scale.set(2);

    mummy = game.add.sprite(200, 360, 'mummy', 10);
    mummy.scale.set(4);
    mummy.smoothed = false;

    anim = mummy.animations.add('walk');
    anim.play(10, true);
}

function update() {

}