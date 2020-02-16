/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * @param {any} val 
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0)
      return null;
    let root = new TreeNode(preorder.shift());
    console.log(root);
    console.log(inorder);
    console.log(preorder);
    if (inorder.length === 1) {
      return root;
    }
    let rootf = true;
    let lt = [];
    let rt = [];
    /**
     * 切割
     */
    for(let i = 0; i < inorder.length; i ++) {
      
      if (inorder[i] === root.val) { 
        rootf = false;
        continue;
      }      
      if (rootf) {
        lt.push(inorder[i]);
      } else  {
        rt.push(inorder[i]);
      }
    }

    root.left = lt.length > 0 ? buildTree(preorder, lt) : null;
    root.right = rt.length > 0 ? buildTree(preorder, rt) : null;

    return root;
    
};

console.log(buildTree([], []))