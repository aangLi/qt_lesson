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
// @ts-ignore
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0)
      return null;
    let root = new TreeNode(postorder.pop());
    console.log(root);
    console.log(inorder);
    console.log(postorder);
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

    
    root.right = rt.length > 0 ? buildTree(rt,postorder) : null;
    root.left = lt.length > 0 ? buildTree(lt,postorder) : null;

    return root;
    
};

console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]))