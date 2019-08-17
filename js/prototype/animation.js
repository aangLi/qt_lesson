function Animal(planet) {
    this.planet = planet;   
}
// constructor 函数是JS的一等对象。
// 原型对象 return {planet:}
Animal.prototype.getPalnet = function() {
    return this.planet;
}

function Person(name) {
    this.name = name;
}
// 沿着原型链一直 person => Person.prototype(animal) => Animal.prototype(自身未命名的对象，我们不知道他的名字) => Object
Person.prototype = new Animal('earth');
Person.prototype.getName = function () {
    return this.name;
}

const person = new Person('AANGLI');
console.log(person.getPalnet());
console.log(person.getName());

// 对象的构造函数一定是生成原型对象的构造函数。