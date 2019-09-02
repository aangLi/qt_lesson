// n 个台阶， 每次你可以跨一个台阶或两个台阶， 请问有多少种走法 n = 7 值为多少。

// 不考虑任何的情况下， 每次都有两种走法， 跨一个台阶， 跨两个台阶。
// 会出现 没有两个台阶的情况 那只能跨一个台阶，且是最后一步

var time = 0;


function times(n) {
    if (n == 0 || n == 1) {
        time += 1;
        return;
    }
    times(n - 2);
    times(n - 1);

}

times(7);
console.log(time);