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
var deepestLeavesSum = function(root) {
  if(root === null)
    return 0;
  console.log(root)
  let len = getTreeDepth(root);
  console.log(`len: ${len}`)
  let sum = getTreeDepthSum(root, 1, len);
  console.log(`sum: ${sum}`)
  return sum;
};

/**
 * 
 * @param {*} root
 * @returns {number}
 */
var getTreeDepth = function(root) {
  if(root === null) 
    return 0;
  return Math.max(getTreeDepth(root.left), getTreeDepth(root.right)) + 1;
}

var getTreeDepthSum = function(root, dep, len) {
  if (dep === len && root !== null) {
    return root.val;
  }
  return getTreeDepthSum(root.left, dep + 1, len) + getTreeDepthSum(root.right, dep + 1, len);
}