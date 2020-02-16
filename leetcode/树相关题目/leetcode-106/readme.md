## 题目
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路
postorder[postorder.length - 1] 为根节点 root
inorder 中 postorder 左边为左子树 [9] 右边为右子树 [15, 20, 7]

递归
左子树递归 postorder [9] inorder [9]
return
右子树递归 postorder [9, 15, 7, 20] inorder [15, 20, 7]
  递归
  左子树 postorder [15] inorder[15]
  return
  右子树 postorder [7]  inorder[7]
  return

## 测试用例
[3,9,20,15,7]
[9,3,15,20,7]
[9]
[9]
[3,4,5,6,7,8,9]
[6,5,4,3,7,8,9]