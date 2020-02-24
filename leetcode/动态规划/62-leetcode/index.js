/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   var step = function(x, y) {
//     if(x === 0 || y === 0) {
//       return 1;
//     }
//     return step(x - 1, y) + step(x, y - 1);
//   }
//   return step(m - 1, n - 1);
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(n).fill(null);
  for (let i = 0; i < dp.length; i ++) {
    if (dp[i] === null)
      dp[i] = new Array(m).fill(null);
    for( let j = 0; j < m; j ++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[n-1][m-1]
};