'use strict'
var foo = {
    x: 1,
    y: 2,
    fn: function() {

    },
    obj: {
        x: 2,
        y: 4
    }
}

/**
 * 如果对象内部属性还为对象，且对象内部有属性同名。
 * 那么 foo.x 取值 会不会取到 obj.x 呢？
 * 答案是不会，内置对象属性不是原型链。
 */

console.log(foo.x); // 1
console.log(foo.obj.x); // 2


function fnFoo() {}; // 其为构造函数，并不是对象
fnFoo.prototype.z = 2;
var obj = new fnFoo();
obj.x = 1;
obj.y = 3;

// 通过对象来访问 z 属性
console.log(obj.z); // 2

obj.z = 5;
console.log(obj.z); // 5
console.log(obj);
console.log(obj.__proto__.z) // 2

delete obj.z;
console.log(obj.z); // 2
console.log(fnFoo.prototype.z) // 2

console.log(obj.hasOwnProperty('z')); // false
console.log('z' in obj); // true

console.log(obj.hhh); // undefined
console.log(obj.hasOwnProperty('hhh')); // false
console.log('hhh' in obj); // false

obj = Object.create({z:56}); // 修改了原型链
console.log(obj.z); // 56
console.log(obj.__proto__.z); // 56