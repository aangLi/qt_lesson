/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(root === null) 
    return [];
  let result = [];
  let queue = [];
  let temp = [];
  let val = [];
  queue.push(root);
  result.push([root.val])
  while(queue.length) {
    let t = queue.shift();
    if(t.left !== null) {
      temp.push(t.left);
      val.push(t.left.val);
    }
    if(t.right !== null) {
      temp.push(t.right);
      val.push(t.right.val);
    }
    if(queue.length === 0 && temp.length !== 0) {
      result.push(val);
      val = [];
      queue = temp;
      temp = [];
    }
  }
  return result.reverse();
};