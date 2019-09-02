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
};

function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {};
       
        // 性能开销问题
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        
        return cloneTarget;
    } else {
        return target;
    }
}
console.time('进行深度查询');
let obj1 = clone(obj);
console.timeEnd('进行深度查询');
// obj1.a = 2;
// obj1.b = 2;
// obj1.c[2] = 4;
// obj1.field4.child = 'newChild';
// console.log(obj, obj1);