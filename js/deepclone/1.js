// 简单类型的拷贝是拷贝值

let a = 1; // 值决定的
let b = a;

b = 2;
console.log(a);

// 复杂的数据类型， 拷贝是引用式赋值
let obj = {
    a: 1,
    b: function() {
        console.log('bbbb');
    }
};
// 深拷贝
// 返回了一个新对象， 重新申请了一个地址。
obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
console.log(obj.a , obj.b, obj2.a , obj2.b);

// 数组中有什么操作， 返回新数组
let c = [1, 2, 3];
c.map(item => item * item)


