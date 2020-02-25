/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = new Array(len).fill(false);
  for(let i = 0; i < len; i ++) {
    if(wordDict.includes(s.slice(0, i+1))) {
      dp[i] = true;
    }
    for(let j = 0; j < i; j ++) {
      if(dp[j] && wordDict.includes(s.slice(j+1, i+1)))
      {
        dp[i] = true;
      }
    }
  }
  return dp[len-1];
};