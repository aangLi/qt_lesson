## 题目
给你一棵二叉树，请你返回层数最深的叶子节点的和。

 

示例：
      1
     / \
    2   3
   / \   \
  4   5   6
 /         \
7           8

输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
 

提示：

树中节点数目在 1 到 10^4 之间。
每个节点的值在 1 到 100 之间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/deepest-leaves-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路
dfs 前序遍历 获取深度
dfs 前序遍历 获取总和

## 测试用例
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[]
[7]
[3,4,7,5,null,null,8,6,null,null,9]
[3,4,9,null,5,10,11,6,7,null,null,13,12,null,null,null,8,null,14,null,16,null,null,null,15]