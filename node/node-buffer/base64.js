const obj = {alg: 'sha256', type: '123'}

const buf = Buffer.from(JSON.stringify(obj))
// console.log(buf)
console.log(buf.toString('base64'))
// base64 是一种编码 用 A-Z a-z 0-9 ..
const base64 = buf.toString('base64')
const buf1 = Buffer.from(base64, 'base64')
console.log(buf1.toString('utf8'))

const fs = require('fs')
fs.readFile('./README.md', (err, buf2) => {
  console.log(buf2)
})