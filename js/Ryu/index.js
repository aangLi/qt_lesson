// 针对个人打斗
let currentPlayer = null;

const Action = {
    attack() {
        console.log(`${this.name}'攻击'`);
    },
    defense() {
        console.log(`${this.name}'防御'`);
    },
    jump() {
        console.log(`${this.name}'跳跃'`);
    },
    squatDown() {
        console.log(`${this.name}'蹲下'`);
    }
}

const Ryu = {

    name: 'Ryu',
    sex: '男',

    attack() {
        console.log(`${this.name}'攻击'`);
    },
    defense() {
        console.log(`${this.name}'防御'`);
    },
    jump() {
        console.log(`${this.name}'跳跃'`);
    },
    squatDown() {
        console.log(`${this.name}'蹲下'`);
    }
};

const ChunLi = {

    name: 'ChunLi',
    sex: '女',

    attack() {
        console.log(`${this.name}'攻击'`);
    },
    defense() {
        console.log(`${this.name}'防御'`);
    },
    jump() {
        console.log(`${this.name}'跳跃'`);
    },
    squatDown() {
        console.log(`${this.name}'蹲下'`);
    }

};
const commends = {
    '119': 'jump', // w
    '115': 'squatDown', // s
    '97': 'defense', // a
    '100': 'attack' // d
}

console.log(commends);

currentPlayer = ChunLi;
// 回放 功能
const commandStack = [];
// document.onkeypress = function (ev) {
//     console.log(ev.keyCode);
//     // switch (ev.keyCode) {
//     //     case 100:
//     //         Person.squatDown();
//     //         break;
//     //     case 119: // jump
//     //         Person.jump();
//     //         break;
//     //     case 97: // defense
//     //         Person.defense();
//     //         break;
//     //     case 110:
//     //         Person.attack()
//     //         break;
//     // }
//     // 1. 抽象成方法 ev.keyCode: 动作
//     // 2. obj[key] key值会变得  obj.name 常量的调用  obj["name"] 

//     let keyCode = ev.keyCode, // 用户按下的某个键
//         command = makeCommand(
//             currentPlayer,
//             commends[keyCode]);

//     // 如果变量有重复计算的情况下 一定要设置变量

//     if (command) {
//         // 谁， 哪种动作 参数
//         // console.log(commends[ev.keyCode]);
//         command();
//         commandStack.push(command);

//     }
// }

// 封装
var makeCommand = function (reciver, state) {
    return function () {
        console.log(Action[state]);
        reciver[state]();
    }
}

// document.querySelector('button.replay').onclick = function () {
//     let command;
//     while (command = commandStack.shift()) {
//         command();
//     }
// }



