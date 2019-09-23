//二分法寻找峰值
function findPeakElement(nums) {
  let i = 0;
  let j = nums.length - 1;
  while(i < j)
  {
      let temp = Math.floor((i + j) / 2);
      if(nums[temp] > nums[temp + 1])
      {
          j = temp;
      }
      else
      {
          i = temp + 1;
      }
  }
  return i;
}