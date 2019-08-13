实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。

- 二分查找的方法
    由于只需要返回整数，而且平方根只有可能返回正数，再改题目下不可能存在负数的情况。
    
    对 x 对半取值， 在 1 到 x / 2 之间进行查找。

    一般情况，平方根是越来越接近 1。
    只需要采取二分法则一直查找。
    
    假设 n 为 循环数乘积的结果。 左边距为 left 右边距为 right
    - 递归
    const binarySearch = function (left, right, x) {
        if (x == 1 || x == 0)
            return x;
        if (Math.floor(left) >= Math.floor(right)) {
            return Math.floor(left);
        }
        mid = (right + left) / 2
        n = Math.pow(mid, 2)
        console.log(left, right, mid, n, x);
        return n > x ? binarySearch(left, mid, x) : binarySearch(mid, right, x)
    }
    - 循环
    function (left, right) {
        while(left < right) {
            mid = Math.ceil((right + left) / 2);
            n = Math.pow(mid,2)
            if (n > x) {
                right = mid;
            } else {
                left =  mid;
            }
        }
    }
- 牛顿迭代法
    牛顿迭代法是通过猜测一个数 x 通过 x = s / x 不断接近 平方值。
    function sqrt(x,s){
        return ((x - (x + s / x) / 2) < 0.00001) ? Math.floor(x) : sqrt((x + s / x) / 2,s);
    }