/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = [];
  walk(n, [], -1, res);
  return res;
};

var walk = function(n, stepy, k, res) {
  // 退出循环
  if(stepy.length === n)
  {
    // 生产棋盘并且导入
    res.push(product(stepy))
    return;
  }
  if(k < n) {
    for(let j = 0; j < n; j ++) {
      // 判断该点是否满足要求
      if(checkout(k, stepy, j)) {
        stepy.push(j);
        walk(n, stepy, k + 1, res)
        stepy.pop();
      }
    }
  }
  return;
}

var checkout = function(k, stepy, y) {
  let x = k + 1;
  for(let i = 0; i < x; i ++) {
    if((x - i === stepy[i] - y) || (x - i === y - stepy[i]) || y === stepy[i]) {
      return false;
    }
  }
  return true;
}

var product = function(stepy) {
  let temres = [];
  for(let i = 0; i < stepy.length; i ++) {
    let s = '';
    for (let j = 0; j < stepy.length; j ++) {
      if (j === stepy[i]) {
        s += 'Q';
      } else {
        s += '.'
      }
    }
    temres.push(s);
  }
  return temres;
}

