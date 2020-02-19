/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null)
      return []
    let queue = [];
    let tempQueue = [];
    let res = [];
    res.push(root.val);
    queue.push(root);
    while(queue.length) {
      let rt = queue.shift();
      rt.left === null ? null : tempQueue.push(rt.left);
      rt.right === null ? null : tempQueue.push(rt.right);
      if(queue.length === 0 && tempQueue.length !== 0) {
        let average = 0;
        let len = tempQueue.length
        for(let i = 0; i < Math.floor(len / 2) ; i ++) {
          if(i !== len - 1 -i) {
            average += (tempQueue[i] / len+ tempQueue[len -1 -i]/ len) ;
          } else {
            average += tempQueue[i] / len;
          }
        }
        res.push(average);
        queue = tempQueue;
        tempQueue = [];
      }
    }
    return res;
};