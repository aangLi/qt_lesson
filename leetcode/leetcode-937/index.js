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
    // console.log(logs.length)
    for (let i = 0; i < logs.length; i ++) {
      let label = logs[i].split(' ', 1);
      // console.log(label)
      let content = logs[i].slice(label[0].length)
      if(Number(content.charAt(1)) || Number(content.charAt(1)) === 0) {
        numlogs.push(logs[i]);
        continue;
      } else {
        letterNum.push({i: i, label: label[0], content: content});
      }
      //  排序
     
      // console.log(temp);
      // let tem = Number(temp[2])
      // console.log(tem)
    }
    // console.log(numlogs)
    let tem = quickSort(letterNum)
    console.log(tem)
    for(let i = 0; i < tem.length; i++ ) {
      // console.log(tem[i])
      letterlogs.push(logs[tem[i].i]);
    }
    return letterlogs.concat(numlogs);
};

function quickSort(arr){
  if(arr.length === 0){
      return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];

  for(var i = 1; i < arr.length; i++){
      if(pivot.content.localeCompare(arr[i].content) > 0){
          left.push(arr[i]);
      } else if (pivot.content.localeCompare(arr[i].content) === 0) {
        // console.log(arr)
        if (pivot.label.localeCompare(arr[i].label) > 0) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      else{
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat(pivot,quickSort(right));
}

function charToNumber(char) {
  return char.charCodeAt() - 0;
}

console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]))