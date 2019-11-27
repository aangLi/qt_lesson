// const s = new Set()
// [1, 2, 3, 4, 5, 4, 3, 2, 1].forEach(x => s.add(x))
// console.log(s)

// let set = new Set([1,2,3,3,2,1])
// console.log(set)
// console.log(set.size)

// let set = new Set()
// set.add(1).add(3).add(5)
// set.delete(1)
// console.log(set)

// Array.from()
// const item = new Set([1, 2, 3, 3, 2, 1])
// const array = Array.from(item)
// console.log(array)

// Set 的遍历顺序是根据插入顺序来的
// key()  包含集合中所有的键的迭代器
// value()  包含集合中所有的值的迭代器
// entries()  包含set对象中所有的键值的迭代器

// let set = new Set([1, 2, 3])
// console.log(set.keys)
// console.log(set.values)
// console.log(set.entries)

let set = new Set([1, 2, 3])

console.log(set.keys())
console.log(set.entries())

set = new Set([...set].map(item => item * 2))
set = new Set([...set].filter(item => item >= 4))
console.log(set)
