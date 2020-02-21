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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  let N = pre.length;
  if (N == 0) return null;
  let root = new TreeNode(pre[0]);
  if (N == 1) return root;

  let L = 0;
  for (let i = 0; i < N; ++i)
      if (post[i] == pre[1])
          L = i+1;

  root.left = constructFromPrePost(pre.slice(1,L+1),post.slice(0,L));
  root.right = constructFromPrePost(pre.slice(L+1,N),post.slice(L,N-1));
  return root;

};