var searchRange = function(nums, target) {
  let f = firstPosition(nums, target);
  if (f === -1)
    return [-1, -1];
  let l = lastPosition(nums, target);
  return [f, l];
};
var firstPosition = function(nums, target) {
let left = 0;
let right = nums.length - 1;
while(left < right){
  let mid = Math.floor((right - left) / 2)  + left; 
  if(nums[mid] < target)
    left = mid + 1;
  else
    right = mid;
}
// console.log(left, right)
if(nums[left] !== target && nums[right] !== target)
  return -1;
return right;
}

var lastPosition = function(nums, target) {
let left = 0;
let right = nums.length - 1;
while(left < right){
  let mid = Math.ceil((right - left) / 2)  + left; 
  if(nums[mid] > target)
    right = mid - 1;
  else
    left = mid;
}
return right;
}

searchRange([5,7,7,8,8,10], 8)