- function 特性
    可以通过 function 来创建一个类
    先通过对象字面量来创建一个类数组，在数组里面自动添加一个类，通过function来实现

    Phaser.Game = function {};
    Phaser.Game.getName = function {};

- 命名空间 name space
    Phaser { }
    1. 声明领地
    取名字 var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function() { };
    游戏框架 最小化入侵我们的 window
    
    2. var Phaser = {} 将直接挂载到 window 下  作用域 scope
    window => 

    3. ES5 内部类的构造 function() { }
    函数名首字母大写 认为其是类 构造函数 
    方法 Phaser.Game.prototype.getName 在其原型链上写上任何的方法