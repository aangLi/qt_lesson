
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
// console.log(isPerfectSquare(107));
for(var i = 0; i < 1000; i++){
    console.log(i+': '+isPerfectSquare(i));
}