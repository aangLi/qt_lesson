/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let x = obstacleGrid.length;
  let y = 0;
  if (x !== 0)
    y = obstacleGrid[0].length;
  for(let i = 0; i < x; i ++) {
    if(obstacleGrid[i][0] === 1)
      break;
    obstacleGrid[i][0] = -1;
  }
  for(let j = 0; j < y; j ++) {
    if(obstacleGrid[0][j] === 1)
      break;
    obstacleGrid[0][j] = -1;
  }
  for (let i = 1; i < x; i ++) {
    for (let j = 1; j < y; j ++) {
      if (obstacleGrid[i][j] === 1)
        continue;
      obstacleGrid[i][j] = (obstacleGrid[i - 1][j] <= 0 ? obstacleGrid[i - 1][j] : 0) + (obstacleGrid[i][j - 1] <= 0 ? obstacleGrid[i][j - 1] : 0);
    }
  }
  if (obstacleGrid[x-1][y-1] === 1)
    return 0;
  if (x === 0 || y === 0)
    return 1;
  return obstacleGrid[x - 1][y - 1] * (-1);
};