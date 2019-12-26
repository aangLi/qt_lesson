const cluster = require('cluster'); // 子进程， 调用多核能力
const os = require('os');
// console.log(os.cpus().length)

// class test extends Worker {
//   constructor() {
//     console.log('初始化')
//   }


// }

// let test1 = new test();


// console.log(test1)

if (cluster.isMaster) {
  console.log(cluster)
  console.log("------------cluster Worker Class-------------")
  // console.log(cluster.Worker)

  for (let i = 0; i < os.cpus().length; i ++) {
    cluster.fork()
  }
} else {
  require('./app')
}