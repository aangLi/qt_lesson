/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// @ts-ignore
var combinationSum = function(nums, target) {
  let res = []
  // @ts-ignore
  backcheck(nums, [], res, target)
  return res;
};

// @ts-ignore
var backcheck = function(nums, templist, res, target, i) {
  if (templist.length === nums.length) {
    res.push([...templist]);
    return;
  }
  for(let i = 0; i < nums.length; i ++) {
    let num = nums[i];
    templist.push(num);
    // @ts-ignore
    backcheck(nums, templist, res, target, i);
    templist.pop();
  }
}