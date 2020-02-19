## 二叉树的层次遍历
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [15,7],
  [9,20],
  [3]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路
通过队列的方式进行解题
queue
queue.push(3);
循环（queue.len)
  queue.shift()
  3.left === null ? null : queue.push()
  3.right === null ? null : queue.push() 


## 测试
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[]
[7]
[3,4,7,5,null,null,8,6,null,null,9]
[3,4,9,null,5,10,11,6,7,null,null,13,12,null,null,null,8,null,14,null,16,null,null,null,15]