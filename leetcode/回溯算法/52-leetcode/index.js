/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  return walk(n, [], -1);
};

var walk = function(n, stepy, k) {
  // 退出循环
  if(stepy.length === n)
  {
    // 方法数加一
    return 1;
  }
  let sum = 0;
  if(k < n) {
    for(let j = 0; j < n; j ++) {
      
      // 判断该点是否满足要求
      if(checkout(k, stepy, j)) {
        stepy.push(j);
        sum += walk(n, stepy, k + 1)
        stepy.pop();
      }
    }
  }
  return sum;
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


