// function cloneShallow(source) {
//   var target = {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       target[key] = source[key]
//     }
//   }
//   return target
// }

// function cloneDeep(source) {
//   if (typeof source != 'object') return source
//   var target = Array.isArray(source) ? [] : {}
//   for (let key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (typeof source[key] === 'object') {
//         target[key] = cloneDeep(source[key])
//       } else {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }

// let a = [0, null, [2, 3]]
// let c = cloneDeep(a)
// a.push(4);
// console.log(a)
// console.log(c)

function deepClone2 (x) {
  const root = {}

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while(loopList.length) {
    // 广度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化我们的赋值目标， key 为 undefined 则拷贝到父元素 否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }

    for(let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 进行下次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}