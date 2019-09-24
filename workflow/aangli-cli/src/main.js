const a = 1;
console.log(a);
let b = 1;

function watch(a, b) {
  console.log(3);
}

watch();

import program from 'commander'; // 安装 命令行的处理
import install from './install'; // es6 的模块化方案

program.command('install')
  .description('install template')
  .alias('i')
  .action(() => {
    install();
  })

program.parse(process.argv); // 相当于调用