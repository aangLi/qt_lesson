'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 1;
console.log(a);
var b = 1;

function watch(a, b) {
  console.log(3);
}

watch(); // 安装 命令行的处理
// es6 的模块化方案

_commander2.default.command('install').description('install template').alias('i').action(function () {
  (0, _install2.default)();
});

_commander2.default.parse(process.argv); // 相当于调用