
## 题目
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

示例 1:

输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
注意:

S的长度在[1, 500]之间。
S只包含小写字母'a'到'z'。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-labels
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解法思路

1. 先找到每个字母的存在最大区间
2. 合并区间 最终获取多少个区间段 记录最大的位置

1. 记录每个字母对应的出现最大位置
2. 再次循环
  1. 记录开始位置和结束位置
  2. 将结束位置值为max(end, 当前循环的字母最大位置)
  3. 如果 i == end 则  sta = end + 1 且记录一条数据