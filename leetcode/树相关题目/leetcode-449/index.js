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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} 
 * @return {string}
 */
var serialize = function(root) {
    let s = '';
    if (root === null)
      return s;
    let queue = [];
    queue.push(root);
    while(queue.length){
      let rt = queue.shift();
      if(rt !== null) {
          queue.push(rt.left);
          queue.push(rt.right);
          s += `${rt.val},`;
      } else {
          s += `null,`;
      }
    }
    return s;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '')
      return null;

    let t = data.split(',');

    let f = t.slice(0, t.length - 1);


    let queue = [];
    let root = new TreeNode(f.shift())
    queue.push(root);
    while(queue.length && f.length) {
      let rt = queue.shift();
      if(f.length) {
        let tem = f.shift();
        tem === 'null' ? null: queue.push(rt.left = new TreeNode(tem))
      }
      if(f.length) {
        let tem = f.shift();
        tem === 'null' ? null: queue.push(rt.right = new TreeNode(tem))
      }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */