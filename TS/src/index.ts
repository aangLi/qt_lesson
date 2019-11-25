function greeter (person: string) {
  // return 'hello, ' + person
  return function getters(person: string) {

  }
}

const user = 'wn'

greeter(user)

// string number boolean null undefined Symbol void bigint
// Object

const isLoading: boolean = false;

const a: number = 6
const b: number = 0x6666

const book: string = 'fs'

function warnUser(): void {
  alert('test')
}

const c: void = undefined

let u: undefined = undefined
let n: null = null

// const sym1 = symbol('key1')
// const sym2: symbol = symbol('key1')

// const max: number = Number.MAX_SAFE_INTEGER  2^53 ---------- js
// const max2 = max + 1
// const max3 = max + 2

// declare let foo: number
// declare let bar: bigint
// foo === bar // false

/**
 * 非常规数据类型
 */
// any
// unknown    // any 和 unknown 区别， unknown 会进行检查， 而 any 不会， unknown 不能变成对象或者深层次赋值
// never
// object

let notSure: any = 4
notSure = '4'
// notSure.foo.bar = 1 报错
// value.bar.foo = 1 可行
// value() 可行
// value[0][1] 可行

let value: unknown = 4
value = "123"
value = {}
value = []
// value.bar.foo = 1 报错
// value() 报错
// value[0][1] 报错


// 永远不存在的值的类型
function error(message:string): never {
  throw new Error(message)
}

// 永远都是空的
const empty: never[] = []

// 泛型
const list: Array<number> = [1, 2, 3]

const list1: number[] =  [1, 2, 3]

// 元组
let x: [string, number]
x = ['hello', 10]

// Object
enum Direction {
  Center = 1
}
let val: object

val = Direction
val = [1]
val = [1, 'hello']
val = {}


// 枚举
// enum Direction {
//   up,
//   down,
//   left,
//   right
// }

enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

console.log(Direction['right'], Direction.up)

// 接口 interface
interface User {
  name: string,
  age?: number,
  readonly isMale: boolean,
  say: (words: string) => string
}

const getUserName = (user: User) => user.name
// user.say = function (words:string) {
//   return words
// }

interface Config {
  width?: number
  [propName: string]: any // 添加字符串索引签名
}

function CalculateAreas(config: Config): {area: number} {
  let square: number = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

// 类型断言
// let mySquare = CalculateAreas({widdth: 123} as Config)

// 字面量赋值给另外一个变量
let options = {widdth: 123}
let mySquare = CalculateAreas(options)

// 抽象类 class
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('ao ao ao ao ')
  }
}

// const animal = new Animal()
// 实例化抽象类需要创建子类来继承基类， 来实例化子类
class Cat extends Animal {
  makeSound () {
    console.log('miao miao miao ')
  }
}

const cat = new Cat()
cat.makeSound()
cat.move()

// public private protected
class Car {
  protected run () :void { // 被 public 修饰的成员是可以被外部访问的
    console.log('启动')
  }

}

// const car = new Car()
// car.run()

class GTR extends Car {
  init() {
    this.run()
  }
}

