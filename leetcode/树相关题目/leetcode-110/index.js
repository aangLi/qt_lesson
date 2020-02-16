/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let sum = 0;
var isBalanced = function(root) {
   maxDepth(root);
   if (sum > 1) {
       return false
   }
   return true;
};
/**
 * 
 * @param {*} root 
 */
var maxDepth = function(root) {
    if (root === null) {
      return 0;
    }
    let lf = isBalanced(root.left);
    let rg = isBalanced(root.right);
    sum = Math.abs(lf - rg);
    return Math.max(lf, rg) + 1;
};