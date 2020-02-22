/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    backcheck(nums, [], [])
};

var backcheck = function(nums, templist, res) {
  if (templist.length === nums.length) {
    res.push([...templist]);
    return;
  }
  for(let i = 0; i < nums.length; i ++) {
    let num = nums[i];
    if(templist.include(num))
      continue;
    templist.push(num);
    backcheck(nums, templist, res);
  }
}