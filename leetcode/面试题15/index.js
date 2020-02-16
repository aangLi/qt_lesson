/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0;
  let nToBinary = n.toString(2)
  // console.log(n.toString(2))
  // for(let i = 0; i < nToBinary.length; i ++) {
  //   if(nToBinary.charAt(i) === '1') {
  //     sum ++;
  //   }
  // }

  

  return sum;
};
console.log(hammingWeight(4294967293))