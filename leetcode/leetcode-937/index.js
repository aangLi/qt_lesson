/**
 * 
 * @param {String[]} logs 
 * @return {String[]}
 */
var reorderLogFiles = function(logs) {
    if (logs.length <= 1) {
      return logs;
    }
    let numlogs = [], letterlogs = [], letterNum = [];
    for (let i = 0; i < logs.length; i ++) {
      let temp = logs[i].split(' ');
      if(Number(temp[1])) {
        numlogs.push(logs[i]);
        continue;
      } else {
        let label = 0;
        for(let k = 0; k < temp[0].length; k++) {
          label += charToNumber(temp[0].charAt(k));
        }
        let sum = charToNumber(temp[1]);
        // for(let j = 1; j < temp.length; j ++) {
        //   sum += charToNumber(temp[j]);
        // }
        letterNum.push({i: i, label: label, sum: sum});
        
      }
      //  排序
     
      // console.log(temp);
      // let tem = Number(temp[2])
      // console.log(tem)
    }
    quick_sort(letterNum, 0, letterNum.length - 1)
    console.log(letterNum)
    for(let i = 0; i < letterNum.length; i++ ) {
      // console.log(letterNum[i])
      letterlogs.push(logs[letterNum[i].i]);
    }
    return letterlogs.concat(numlogs);
};

/**
题目：快速排序算法
思路：两个哨兵，i,j,j从右边找比基数小的，i从左边找比基数大的，然后交换两个目标元素的位置，直到i=j,然后交换i和基数的位置，递归处理。
**/
function quick_sort(arr,from,to){
	var i = from; //哨兵i
	var j = to; //哨兵j
	var key = arr[from]; //标准值
  if(from >= to){ //如果数组只有一个元素
    // console.log(i, j)

    // console.log(arr)
	  return;
	}
	while(i < j){
    while(arr[j].sum > key.sum && i < j ){ //从右边向左找第一个比key.sum小的数，找到或者两个哨兵相碰，跳出循环
			j--;
		}
    while(arr[i].sum <= key.sum && i < j){  //从左边向右找第一个比key.sum大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证在本轮循环结束前，key.sum的位置不变，否则的话跳出循环，交换i和from的位置的时候，from位置的上元素有可能不是key
      // if()
      
			i++;
		}
		/**
		  代码执行道这里，1、两个哨兵到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(key是当前数组最小值)
    **/
   console.log(i, j)
   console.log(arr)
    if(i < j ){ //交换两个元素的位置
      console.log(i, j)
      console.log(arr)
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
  }
  if(!(arr[i].sum === key.sum && arr[i].label < key.label)) {
	  arr[from] = arr[i] //
	  arr[i] = key;
  }
  quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}

function charToNumber(char) {
  return char.charCodeAt() - 0;
}

console.log(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]))