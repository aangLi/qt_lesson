/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
      return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// [3,9,20,null,null,15,7]
// [1,2,2,3,3,null,null,4,4]
// []
// [1]
// [1,2,2,null,null,3,3,null,null,4,4]
// [1,2,null,3,null,4,null,5,null,6]
// [1,2,null]
// [1,2,2,3,null,null,3,4,null,null,4]