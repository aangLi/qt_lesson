// 1. 达到o(1)的地步可以创建一个三倍长度的数组 最开始的位置放置密钥 随后放对应的值 再放次数
/**
 * 最近最少使用原则
 * @param capacity:number 容量 
 */
// class LRUCache {
//     constructor LRUCache(capacity) {
//         console.log(11);
//     }
// }



var LRUCache = function (capacity) {
    this.capacity = capacity; // 空间的上限
    // var jsonstr = '[]';
    // this.keyValue = eval('(' + jsonstr + ')'); // key__Value JSON 数组
    // this.keyTime = eval('(' + jsonstr + ')'); // key__Time JSON 数组
    this.keyValue = new Map(); // key_value Map 数组
    this.keyTime = new Map(); // key_time Map 数组

};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {



    // 调整优先级
    return -1;
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果缓存未饱和，允许无条件的插入
    if (this.keyValue.length < this.capacity && !this.keyValue.has(key)) {

        this.keyValue.set(key, value);
        this.keyTime.set(key, 0);

    } else if (this.keyValue.has(key)) {
        this.keyValue.set(key, value);
        this.keyTime.set(key, 0);
    } else {
        // 弹出最少使用的那一项，根据实时维护，只需要弹出最前面的即可，排序以小至大
        // var pop = this.keyTime.();
        this.keyValue[pop.key].delete();11
        this.keyValue.set(key, value);
        this.keyTime.set(key, 0);
    }
}
/**
 * 给内部LRUCache表维护，保持以顺序大小
 * @return {void}
 */
LRUCache.prototype.sort = function () {

}

var ll = new LRUCache(2);
ll.put(1, 3);
console.log(ll.keyValue);
console.log(ll.keyTime);
ll.put(1, 4);
console.log(ll.keyValue);
console.log(ll.keyTime);

// [] length push
// [1] push
// [1,2] 在哪端时最近常用的？ push
// get(1) 读操作
// 1 所在的位置，从原来的数组里移除，push到队尾 不会带来空间使用量的增加
// put(3) 要回收空间 带来空间的分配 最近最少使用(
//     length>=容器 shift
// ) push(3) 