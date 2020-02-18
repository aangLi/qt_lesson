/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    if(root === null)
      return []];
    let queue = [];
    queue.push([root, [root.val], root.val]);
    while(queue.length) {
      let temp = queue.shift();
      let rt = temp[0];
      let templist = temp[1];
      let tempsum = temp[2];
      console.log(rt);
      console.log(templist);
      console.log(tempsum);
      if(tempsum === sum && rt.left === null && rt.right === null) {
        result.push(templist);
        continue;
      }
      
      rt.left !== null ? queue.push([rt.left, [...templist, rt.left.val], tempsum + rt.left.val]) : null;
      rt.right !== null ? queue.push([rt.right, [...templist, rt.right.val], tempsum + rt.right.val]) : null;
    }
    return result;
};