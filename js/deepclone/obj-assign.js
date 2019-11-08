if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict'
      if (target == null) {
        throw new TypeError('Cannot conver undefined or null to object')
      }

      var to = Object(target)

      for (let index = 1; index < arguments.length; index ++) {
        var nextSource = arguments[index]

        // if (nextSource != null) {
        //   for (var nextKey in nextSource) {
        //     if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        //       nextKey = nextSource[nextKey]
        //     }
        //   }
        //   to[nextKey] = nextSource[nextKey]
        // }

        var nextSourceAllName = Object.getOwnPropertyNames(Object(nextSource))
        for(let nextKey in nextSourceAllName) {
          if (nextKey != null) {
            to[nextKey] = nextSource[nextKey]
          }
        }

      }
      return to
    },
    writable: false,
    configurable: true
  })
}

let a = {
  name: 'dasd',
  age: 18
}

let b = null

console.log(Object.assign2(a, b))