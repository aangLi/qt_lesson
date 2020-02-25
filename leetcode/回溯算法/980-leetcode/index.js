// @ts-nocheck
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let count = 0;
  let x = 0;
  let y = 0;
  for(let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j ++) {
      if (grid[i][j] === 0)
        count ++;
      if (grid[i][j] === 1) {
        x = i;
        y = j;
      }
    }
  }
//   console.log(count)
  return walk(grid, x, y, 0, count)
};

var walk = function(grid, x, y, step, count) {
//   console.log(x, y, grid[x][y], step)
  let sum = 0;
  // 退出条件
  if(grid[x][y] === 2 && step === count + 1) {
    // console.log('找到')
    return 1;
  } else if (grid[x][y] === 2) {
      return 0;
  }
  // 回溯条件
  if(grid[x][y] === -1 || step > count)
    return 0;
  // 设置这个点已经走过
  grid[x][y] = -1;
  // 四个方向游走
  // 上
  sum += (x - 1 >= 0) ? walk(grid, x - 1, y, step + 1, count) : 0;
  // 左
  sum += (y - 1 >= 0) ? walk(grid, x, y - 1, step + 1, count) : 0;
  // 下
  sum += (x + 1 < grid.length) ? walk(grid, x + 1, y, step + 1, count) : 0;
  // 右
  sum += (y + 1 < grid[0].length) ? walk(grid, x, y + 1, step + 1, count) : 0;
  
  grid[x][y] = 0;

  return sum;
}