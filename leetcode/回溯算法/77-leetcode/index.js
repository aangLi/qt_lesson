/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let nums = [];
  let res = [];
  for(let i =1; i <= n; i ++) {
    nums.push(i);
  }
  backcheck(nums, [], res, k, 0)
  return res;
};

var backcheck = function (nums, templist, res, k, s) {
  // 结束
  if(templist.length === k) {
    res.push(templist.slice());
    return;
  }
  // 去重
  for(let i = s; i < nums.length; i ++) {
    
    templist.push(nums[i]);
    backcheck(nums, templist, res, k, i+1);
    templist.pop();
  }
  
}