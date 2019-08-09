// NaN Infinity 特殊情况的试验。
console.log(~NaN); // -1
console.log(~Infinity); // -1

/**
 * ~
 */
console.log(25); // 25
console.log(~25); // 26

/**
 * &
 */
console.log(25&3); // 1

/**
 * |
 */
console.log(25|3); // 27

/**
 * ^
 */
console.log(25^3); // 26

/**
 * 左移
 */
console.log(-2<<4); // -32
console.log(-2<<31); // 0
console.log(2<<31); // 0
console.log(-2<<32); // -2

/**
 * 有符号右移
 */
console.log(64>>5); // 64

/**
 * 无符号右移
 */
console.log(-64>>5);
console.log(-64>>>5);

