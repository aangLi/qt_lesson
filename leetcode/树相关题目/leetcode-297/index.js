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
      return '[]';
    let queue = [];
    let tempQueue = [];
    let res = []
    queue.push(root);
    s += `${root.val}`
    while(queue.length){
      let rt = queue.shift();
      if(!(rt.right === null && res.length === 0)) {
        res.unshift(rt.right)
        rt.right === null ? null : tempQueue.push(rt.right)
      }
      if(!(rt.left === null && res.length === 0)) {
        res.unshift(rt.left)
        rt.left === null ? null : tempQueue.push(rt.left)
      }

      // 判断条件 queue是否为 空
      if(queue.length === 0) {
        for(let i =0; i <res.length; i ++) {
          s += `${res[i]},`
        }
        queue = tempQueue;
        tempQueue = [];
        res = [];
      }
    }
    return `[${s.slice(0,s.length - 1)}]`;
};

// @ts-ignore
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
    if (data === '[]')
      return null;

    let f = data.slice(1,data.length-1).split(',');

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