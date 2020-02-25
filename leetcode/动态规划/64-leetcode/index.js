/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let x = grid.length;
  let y = grid[0].length;
  for(let i = 1; i < x; i ++) {
    grid[i][0] += grid[i-1][0];
  }
  for(let i = 1; i < y; i ++) {
    grid[0][i] += grid[0][i-1];
  }
  for(let i = 1; i < x; i ++) {
    for(let j = 1; j < y; j ++) {
      grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1]);
    }
  }
  return grid[x-1][y-1];
};