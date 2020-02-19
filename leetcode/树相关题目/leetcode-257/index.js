/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    if (root === null)
      return result;
    if (root.left === null && root.right === null)
      return [`${root.val}`];
    root.left !== null ? DFS(root.left, `${root.val}`, result) : null;
    root.right !== null ? DFS(root.right, `${root.val}`, result) : null;
    return result;
};

var DFS = function(root, path, result) {
  path += `->${root.val}`;
  if(root.left === null && root.right === null) {
    result.push(path);
  }
  root.left !== null ? DFS(root.left, path, result) : null;
  root.right !== null ? DFS(root.right, path, result) : null;
  return;
}