/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let step = 0
  function walk(root, k) {
    if(root === null)
      return;
    walk(root.left, k);
    step ++;
    if(k === step) {
      return root.val;
    }
    walk(root.right, k)
  }
  return walk(root, k)
};