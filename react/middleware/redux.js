const mid1 = next => action => {
  console.log(1);
  next();
  console.log(2)
}
// mid1(mid2())
// 需要 next
// 指向下一项
// 组合 从右到左 组合完之后 把 mid2 交给 mid1
const mid2 = next => action => {
  console.log(3);
  next();
  console.log(4)
}
const mids = [mid1, mid2];
const chain = compose(...mids)



// compose 组合

let fn1 = str => str.split('')
let fn2 = str => str.toLocaleLowerCase();
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const opt = compose(fn1, fn2)
console.log(opt('ABCDE'))

chain(() => {
  console.log('the source of dispatch')
})();
/**
 * redux dispatch
 * 只能 dispatch 一个对象
 * 但是有了 thunk 能够 dispatch 一个函数
 * if (action === function) {
 *  if (action === function) {
 *    // 执行原始的 dispatch
 *  }
 * }
 * 
 */