## 516. 最长回文子序列
给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。

示例 1:
输入:

"bbbab"
输出:

4
一个可能的最长回文子序列为 "bbbb"。

示例 2:
输入:

"cbbd"
输出:

2
一个可能的最长回文子序列为 "bb"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路
首先我们需要想到
如果 s[i] === s[j] 那么 其就是 一个回文字符串
dp[i][j] = dp[i+1][j-1] + 1
如果不相同
则出现再两边
dp[i][j] = Math.max(dp[i][j-1],dp[i+1][j])
## 测试