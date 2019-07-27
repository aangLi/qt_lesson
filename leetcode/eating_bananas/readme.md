Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.


- H时间
- 一次只能吃一把
- K K*H 吃的最大数量
- min K 求出最小的 K
    1 -> N(尝试) 20(MAX)

1. 把香蕉表达一下 数据结构
处理的数据  .length H 
[3, 6, 7, 11] H = 8
K = 4
[30, 11, 23, 4, 20] H = 5
K = 30
[30, 11, 23, 4, 20] H = 6
K = 23

2. Max 规则 Max(arr)
3. Max-- 正好在 H 小时内吃完 
4. 怎么可以高效 二分查找

- JS 数据类型
    基础数据类型 整形 number
    string Boolean undefined null
    symbol
    复杂数据类型 object 内涵 [ARRAY, FUNCTION, MATH, REGEXP, DATE]
    MATH.MAX()

    NaN 也是一个 number 类型

- ES6 新特性
    ... spread 展开运算符 将数组进行展开 取出内部的内容
    ... reset 收起

- koko
    1. while(1 -> Math.max(...piles)) 每把香蕉花的小时数加起来 piles => pile => Math.ceil(pile/low)
- 减少写尝试
    1. -> max 二分查询
    2. 寻找到不能吃完的K值，将K值作为最小值继续寻找。
    3. 寻找到能吃完的K值，也将其认为是非最小值。
    4. 以防最小值是HI - 1 的情况 且 LO-1不能吃完将循环条件设置为 LO<=HI-1
    5. 防止HI就是最小值的情况，将有一个判断防止重复的取中间的步骤