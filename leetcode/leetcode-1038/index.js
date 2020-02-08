/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * @param {Number[]} val 
 */
function TreeNode(val) {
  if (val === null) {
    this.val = null;
  } else {
    this.val = val;
    this.left = this.right = null;
  }
}

function Tree(root) {
  root.filter((element, index) => {
    root[index] = new TreeNode(element);
    // console.log('root: ')
    // console.log(root)
  })
  
  root.filter((Element, index) => {
    if (Element.val !== null) {
      Element.right = (index + 1) * 2 > root.length - 1 ? "";
      Element.left = root[(index + 1) * 2 - 1];
    }
  })
  return root[0];
  
}

Tree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]);

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let sum = 0;
var bstToGst = function(root) {
    console.log(root)
    let rt = Tree(root)

    console.log(rt)

    sum = 0;
    if (rt == null) {
      return null;
    }
    bstToGstCore(rt)
    return rt;

};

var bstToGstCore = function(node) {
  console.log('node');
  console.log(node)
  if (node.val === null) {
    return;
  }
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