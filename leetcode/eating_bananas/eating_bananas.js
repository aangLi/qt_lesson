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


var minEatingSpeed = function (piles, H = 8) {
    let lo = 1, //min
        hi = Math.max(...piles),
        temp; //max
    while (lo <= hi - 1) {
        
        if (canEatAllBananas(piles, H, lo)) {
            console.log(`可以被吃完   hi:${hi} + lo:${lo}`);
            hi = lo;
            lo = temp;

        } else {
            console.log(`不可以被吃完   hi:${hi} + lo:${lo}`);
            temp = lo + 1;
            // 提前退出，防止产生无限循环的情况 例如 实例一 minEatingSpeed([3,6,7,11],8)
            if(lo == Math.floor((hi + lo) / 2)){
                return hi;
            }
            // 模拟C语言情况下的整数的四舍五入
            lo = Math.floor((hi + lo) / 2);
        }
    }

    return Math.floor(hi);

}

// 查找是否能吃完
function canEatAllBananas(piles, H, lo) {
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / lo);
    }
    return h <= H;
}


console.log(minEatingSpeed([3,6,7,11],8))

console.log(minEatingSpeed([190593446, 46966570, 58112906, 718695514, 467956628, 32868367, 774795598, 866489925, 99515980, 403797587, 236552660, 791498323, 261642291, 421618193, 656016520, 735154815, 42473162, 17218552, 130422486, 610624004, 263684205, 274273276, 86320038, 191161325, 144782805, 606503472, 137683203, 123723979, 313447910, 807728967, 795901753, 535110917, 818848819, 375034713, 390935126, 702086996, 746196272, 288093628, 674659573, 379407501, 517196534, 977676916, 916154034, 275038047, 411849904, 105284895, 310478426, 715812144, 481088151, 400006951, 193276729, 23673830, 622253684, 332587451, 287931061, 65207733, 505132344, 572989906],
    532200648));