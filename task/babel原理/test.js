const babel = require('babel-core')
const result = babel.transform('const result = 1 + 2 + 3', {
  plugins: [require('./index')]
})

babel.traverse()

console.log(result.code)