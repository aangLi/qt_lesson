/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    /**
     * 暴力循环 两重解法
     */
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    /**
     * hash 表解法 补数的解法
     */
    const map = new Map();
    for (let i = 0; i< nums.length; i++ ) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]) ,i]
        }
        map.set(target - nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9));