/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [[]];
  for(let i = 1; i <= nums.length; i ++) {
    backcheck(nums,res,[],i,0);
  }
  return res;
};

var backcheck = function(nums, res, templist, k, i) {
  // 结束条件
  if(templist.length === k) {
    res.push(templist.slice());
    return;
  }
  for(let j = i; j < nums.length; j ++) {
    templist.push(nums[j]);
    backcheck(nums, res, templist, k, j+1);
    templist.pop();
  }
}