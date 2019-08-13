输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

- 如果 n 为负数，则是 1 / 正数结果。如果 n 为正数则是 x 的 n 次方。
    - 采用函数调用的递归
        但是如果用一次累乘的方法来写这道题，肯定是会超时的，所以通过将 n 为 偶数则求 x 的 n / 2次方，如果是奇数则求 x 的 （n-1) / 2次方 在乘以一个 n。通过 不断的二分 采用递归的方式求取结果。

        if (n < 0)
            return 1 / pow(x, -n);
        else
            return pow(x, n);

        function pow(x,n)
            if ( n == 1 || n == 0) {
                return n == 1? x:1;
            } else {
                return n % 2 == 0? pow(x,n/2)*pow(x,n/2) : x*pow(x,(n-1)/2)*pow(x,(n-1)/2);
            }

    - 不采用函数调用的递归



- 可以采取从最小的地方开始，依次相乘。 不可取，在查找最终项的时候比从最终项开始查找到1花费的时间更多。
    time    value       curentN     boolean
    1       x           1           n < curentN ? return pre : next
    2       x*x         2           n < curentN ? return pre : next
    3       x^4         4           n < curentN ? return pre : next
