let obj = {
    a: 1,
    // b: function() {
    //     console.log('1111');
    // },
    c: [1, 2, 3],
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}


// 没有解决 Array function Object 复制数据类型的拷贝问题。
function clone(target) {
    let cloneTarget = {}; // 浅拷贝要的 内存空间
    // let cloneTarget = new Object()
    
    for (const key in target) {
        cloneTarget[key] = JSON.parse(JSON.stringify(target[key]));
    }
    
    return cloneTarget;
}


console.time('直接，不深入递归');
let obj1 = clone(obj);
console.timeEnd('直接，不深入递归');
// obj1.a = 2;
// obj1.b = 2;
// obj1.c[2] = 4;
// obj1.field4.child = 'newChild';
// console.log(obj, obj1);