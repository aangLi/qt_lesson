/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let len = edges.length;
  let pre = [];
  for(let i = 0; i <= len; i ++) {
    pre[i] = i;
  }
  for(let i = 0; i < len; i ++) {
    let root1 = findRoot(edges[i][0], pre);
    let root2 = findRoot(edges[i][1], pre);
    if(root1 === root2)
      return edges[i];
    pre[root1] = root2;
  }
  return [];
};

var findRoot = function(num, pre) {
  while(pre[num] !== num) {
    pre[num] = pre[pre[num]]
    num = pre[num]
  }
  return num;
}