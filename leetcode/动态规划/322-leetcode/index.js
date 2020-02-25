/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  for(let i = 1; i <= amount; i ++) {
    for(let j = 0; j < coins.length; j ++) {
      if(i === coins[j]) {
        dp[i] = 1;
      } else if(i - coins[j] > 0) {
        dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
      }
    }
  }
  if (amount === 0)
    return 0; 
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};