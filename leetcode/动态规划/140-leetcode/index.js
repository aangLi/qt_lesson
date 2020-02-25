/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = new Array(len).fill(false);
  if(wordBreak1(s, wordDict)) {
      for(let i = 0; i < len; i ++) {
    let temp = "";
    if(wordDict.includes(temp = s.slice(0, i+1))) {
      dp[i] = [];
      dp[i].push(temp);
    }
    for(let j = 0; j < i; j ++) {
      if(dp[j] && wordDict.includes(temp = s.slice(j+1, i+1)))
      {
        for(let k = 0; k < dp[j].length; k ++) {
          if(dp[i] === false) {
            dp[i] = [];
            dp[i].push(dp[j][k] + ` ${temp}`);
          } else {
            dp[i].push(dp[j][k] + ` ${temp}`);
          }
        }
      }
    }
  }
  }
  return dp[len - 1] === false ? [] : dp[len - 1];
};

var wordBreak1 = function(s, wordDict) {
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