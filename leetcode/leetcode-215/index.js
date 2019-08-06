/**
 * @param {number[]} arrs
 * @param {number} bgn
 * @param {number} end
 * @return void
 */
function quickSort(arrs, bgn, end)  //arr must be the reference of real param
{
    //数组arr空or仅有一个元素则退出
    if (bgn >= end - 1)
        return;

    var lindex = bgn;
    var rindex = end - 1;
    var std = arrs[lindex];
    while (lindex < rindex)
    {
        while (lindex < rindex)
        {
            if (arrs[rindex] < std)
            {
                arrs[lindex++] = arrs[rindex];
                break;
            }
            --rindex;
        }

        while (lindex < rindex)
        {
            if (arrs[lindex] >= std)
            {
                arrs[rindex--] = arrs[lindex];
                break;
            }
            ++lindex;
        } 
    }

    arrs[lindex] = std;
    quickSort(arrs, bgn, lindex);
    quickSort(arrs, rindex + 1, end);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quickSort(nums,0,nums.length);
    console.log(nums[nums.length - k]);
};

findKthLargest([3,2,1,5,6,4],2);
findKthLargest([3,2,3,1,2,4,5,5,6],4);
