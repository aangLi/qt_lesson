import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 纯函数 同样的输入 同样的输出

// 记录 通过一个 map 数组来进行记录
// let c = 10;
// let map = new Map();
// function add (a, b) {
//   key = JSON.stringify(Array.from(arguments));
//   if (map.get(key)) return map.get(key);
//   let res =  a + b + c;
//   map.set(key, res);
//   return res;
// }

// add(1, 2); // 13
// c = 20;
// add(1, 2); // 23

// function reducer(a, b) {
//   return a - b;
// }

// // 高阶函数 函数是一等公民

// function memorize(fn) {
//   let map1 = new Map();
//   // 有缓存功能的函数
//   return function(...args) {
//     let key = JSON.stringify(args);
//     if (map1.get(key)) return map1.get(key);
//     let res = fn(...args);
//     map1.set(key, res);
//     return res;
//   }
// }

// JSON.stringify([3, 2, null]) === JSON.stringify([3, 2, undefined])

// // loadsh memorize 自行设置生产key的方法
// _.memorize(reducer, () => {})