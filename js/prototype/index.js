// es5 面向对象
// function Person(name) { // 女主角
//     // constructor
//     // Object {}
//     this.name = name;
// }

// Person.prototype = {
//     getName: function() {
//         return this.name;
//     },
//     playHpjy: function() {
//         console.log('今晚吃鸡，大吉大利')
//     }
// }

class Person{
    constructor(name){
        this.name = name;
        console.log('这是constructor');
    };
    getName() {
        return this.name;
    };
    playHpjy() {
        console.log('今晚吃鸡，大吉大利')
    }
}

// new + fun()  新的对象
// 实例        第三者
let person = new Person('AANGLI');
// console.log(person, person.__proto__, person.constructor, Person.prototype);
console.log(person.constructor, Person.constructor, Person.prototype.constructor, person.__proto__.constructor)