/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let i = 0;
let len = 0;
function TreeNode(root) {
  console.log(root)
  if (i * 2 + 1 > len) {
    return this;
  }
  // console.log()
  console.log(`i: ${i} -----> this: ${this} ------> root[i]: ${root[i]}`)
  this.val = root[i];
  this.left = TreeNode(root[i*2]);
  this.right = TreeNode(root[i*2 + 1])
  i ++;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let sum = 0;
var bstToGst = function(root) {
    len = root.length;
    i = 0;
    console.log(root)
    let rt = TreeNode(root)

    console.log(rt)

    // sum = 0;
    // if (root == null) {
    //   // return null;
    // }
    // bstToGstCore(root)
    // return root;

};

function bstToGstCore (node) {
  if (node.right !== null) {
    bstToGstCore(node.right);
  }
  node.val += sum;
  sum = node.val;
  if (node.left !== null) {
    bstToGstCore(node.left)
  }
  console.log(`sum: ${sum}`)
}

console.log(bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]));