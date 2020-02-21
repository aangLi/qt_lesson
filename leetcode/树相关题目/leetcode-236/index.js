/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// @ts-ignore
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let res = null;
  function walk(node) {
    if(node === null)
      return false;
    let mid = node.val === p.val || node.val === q.val ? 1 : 0 ;
    let left = walk(node.left) ? 1:0;
    let right = walk(node.right) ? 1:0;
    if (left + right + mid >= 2)
    {
      res = node;
      return;
    }

    return left + right + mid > 0
  }
  if(p === q)
    return p;
  walk(root);
  return res;
};