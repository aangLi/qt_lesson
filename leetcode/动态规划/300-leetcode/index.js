/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length;
  let dp = new Array(len).fill(0);
  if(len === 0) 
    return 0;
  dp[0] = 1;
  for(let i = 1; i < nums.length; i ++) {
    for(let j = 0; j < i; j ++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      } else if(i === len - 1) {
        dp[i] = Math.max(dp[i], dp[j]);
      } else {
        dp[i] = Math.max(dp[i], 1)
      }
    }
  }
  return dp[len - 1]
};