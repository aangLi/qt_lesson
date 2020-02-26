/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let len = s.length;
  let dp = new Array(len).fill(0);
  for(let i = 0; i < dp.length; i ++) {
    dp[i] = new Array(len).fill(0);
    dp[i][i] = 0;
  }
  for(let i = len - 1; i >= 0; i --) {
    for(let j = i + 1; j < len; j ++) {
      if(s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }
  return dp[0][len-1];
};