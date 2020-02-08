/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let arr = [];
    let map = new Map();
    let sta = 0;
    let end = 0;

    for (let i = 0; i < S.length; i ++) {
      map.set(S.slice(i, i + 1), i);
    }
    console.log(map)
    for (let i = 0; i < S.length; i ++) {
      end = Math.max(end, map.get(S.slice(i, i + 1)));
      if (i === end) {
        console.log(`end: ${end},   sta: ${sta}`);
        arr.push(end - sta + 1);
        sta = end + 1;
        console.log(`arr: ${arr}`);
      }
    }

    return arr;

};

console.log(partitionLabels("ababcbacadefegdehijhklij"));