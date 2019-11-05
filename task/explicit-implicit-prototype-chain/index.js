// function Person(name) {
//   this.name = name
// }

// let p = new Person('AANGLI')
// console.log(p.__proto__.prototype)
// console.log(Person.prototype)
// console.log(Person.__proto__)

// let f = new Function()
// let o = new Object()


// var foo = new Object()
// var foo = new Object()

// console.log(Function.prototype)
// console.log(Object.__proto__)

// console.log(foo.__proto__)

/**
 * 1. 创建一个空对象
 * 2. 给对象的__proto__ 放上 传过来的参数的 显示原型
 */
// function Person(name) {
//   this.name = name
//   return {name}
// }

// let p = new Person('AANGLI')

// console.log(p)

/**
 * for in 对象
 * for of 数组
 * 1. index 是索引为字符串数字    不能进行几何运算
 * 2. 遍历的时候可能不会按照原来的顺序进行遍历
 * 3. 使用 for in 会遍历所有可以枚举的属性， 包括原型
 * -----------------------------------------------
 * 1. 遍历的是所有的元素
 * 2. 不包括数组的原型和索引
 */
// Array.prototype.method = function() {}
// var myArray = [1, 2, 3, 4, 5, 6, 7]
// myArray.name = 'AANGLI'
// for ( let index of myArray) {
//   console.log(index)
// }

// console.log('------------------------------')

// for ( let index in myArray) {
//   console.log(myArray[index])
// }

let oArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
// let oArr = [1, 2, 3, 4, 5 ,6 ,7 ,3, 2, 8]
let temp = [];
function e (array) {

  for(let index in array) {
    // console.log(array[index])
    if (array[index] instanceof Array) {
      // console.log(...e(array[index]))
      e(array[index])
    }else {
    temp.push(array[index])
    }
  }
  return temp
}

console.log(e(oArr))

function a (array) {
  let temp = []
  for( let index in array) {
    if (array[index] instanceof Array) {
      // console.log(a(array[index]))
      temp = temp.concat(a(array[index]))
      
    }else {
      temp.push(array[index])
    }
  }
  return temp
}

console.log(a(oArr))

// function b (array) {
//   while(array.some( item => 
//     if (item.isArray())) {

//     }
// }

