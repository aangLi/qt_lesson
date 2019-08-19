- 题目
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

- 题解

按照普通的想法，只需要进行一个二重循环，枚举所有不重复的情况，如果途中有满足 target 的方法，则返回这两个值对应的下表。

1. 暴力解法
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

2. map 哈希表 补数的方法。
    通过 map 记录 target 的补数，将 target - nums[i] 和 i 存入其中，然后再依次查找下去，如果有 target - nums[i] 则返回 对应的下标值 i，同时，返回这次循环的 i。
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