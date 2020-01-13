- 快慢指针
  1. 一次循环 cur++ 一直跑
  2. cur 跟 pre arr[] 不等的话，
    pre ++
    相等的话 pre 不动
  3. cur 再走的时候， 继续比较
    新的 cur 跟旧的 pre 不等时，
    pre ++ 并且把 cur 值给 新的 pre
    把因为之前重复空出来的位置 给填上。
  4. cur > length
  