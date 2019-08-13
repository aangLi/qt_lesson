/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        return 1 / Pow(x, -n);
    } else {
        return Pow(x, n);
    }
};

const Pow = function (x, n) {
    if (n == 1 || n == 0) {
        return n == 1 ? x : 1;
    } else {
        return (n % 2 == 0) ? Math.pow(Pow(x, n / 2), 2) : x * Math.pow(Pow(x, (n - 1) / 2), 2);
    }
}