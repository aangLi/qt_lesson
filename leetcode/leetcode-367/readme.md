给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False

- 牛顿迭代法 (num + s / num) / 2
    首先，我们认为我们从完全平方数和非完全平方数的特性入手，完全平方数可以认为是能被某一个数整除而除后结果和除数完全相等，且是个整数。
    那我们通过牛顿迭代法可以快速的求出平方根，或者接近平方根的数字。在接近的过程，这个数字是越来越小的，我们将这个数字设置为 n ,然后用 num / n 将这个结果设置为 m。
    在 n 越来越小的情况下，m 则越来越大。我们根据上述的分析，将 n 和 m 相差一个非常小的数时，返回 true。如果 m > n的话则直接停止，返回false。

/**
 * @param {number} num
 * @return {boolean}
 */
const isInt = /^[0-9]+$/
var isPerfectSquare = function(num) {
    let s = num;
    if ( num == 1 || num == 4 || num == 9 )
        return true;
    return sqrt((num + s / num) / 2, s, num);
};

function sqrt(n, s, num) {
    let m = num / n;
    // console.log(n, m);
    if (n - m < 0.00000000000001) {
        return isInt.test(m)
    }
    return m <= n ? sqrt((n + s / n) / 2, s, num) : false;
}