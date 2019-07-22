// 1. 获取数组
// 2. 给数组排序
// 3. 根据 K 和 H 之间的关系 找到 第(H - K + 1)大的数 在与最大数之间寻找合适的 K 值
// 4. 采用二分查找，于第(H - K + 1)大的数和最大数之间
const IMath = {}; //.namespace

// /**
//  * @params:number NaN Not a number
//  * @return:number 返回最大值
//  */
// IMath.max = function(...args) {
//     // arguments 类数组
//     // console.log(arguments, arguments.length);
//     for(var i = 0; i < arguments.length; i++){
//         // 类型检测
//         // console.log(arguments[i]);
//         if(typeof arguments[i] !== 'number'){
//             return NaN;
//         }

//     }
// }

// /**
//  * @params:number
//  * @return:numbers 返回升序 arguments 序列
//  */
// IMath.sort = function(...args) {

// }

// console.log(IMath.max(...[2, 4, 5, 6]));


var minEatingSpeed = function(piles, H = 8) {
    let lo = 1, //min
        hi = Math.max(...piles); //max
    
    while(lo <= hi) {
        //提前退出

        if (canEatAllBananas(piles, H, lo)){
            return lo;
        }

        lo ++;
    }

    return lo;

}

function canEatAllBananas(piles, H, lo) {
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / lo);
    }
    return h <= H;
}

console.log(minEatingSpeed([3, 6, 7, 11], 5));