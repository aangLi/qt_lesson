/**
 * @param {number[]} data
 * @return {Boolean}
 */
var validUtf8 = function(data) {
    let len = data.length;
    let flag = 1;
    // 数组为空
    if (len === 0)
      return false;
    // 数组长度为 1 1字节的字符

    let codeBinary = [];
    for(let i = 0; i < len; i ++) {
      codeBinary.push(data[i].toString(2));
    }
    for(let i =0; i < len; i ++) {
      codeBinary[i] = '00000000'.slice(codeBinary[i].length).concat(codeBinary[i]);
    }
    while(codeBinary.length) {
      let top = codeBinary.shift();
      console.log(`top: ${top}`)
      let codeLen = top.split('0', 1)[0].length;
      // console.log(codeLen)
      if(codeLen > 4 || codeLen === 1) {
        flag = 0;
        break;
      }
      if(codeLen === 0) {
        continue;
      }
      for (let i = 0; i < codeLen - 1; i ++) {
        let tempCode = codeBinary.shift();
        console.log(`tempCode: ${tempCode}`)
        if(tempCode === undefined || tempCode.slice(0, 2) !== '10') {
          flag = 0;
          break;
        }
      }
    }
    // console.log(codeBinary);

    if(flag) {
      return true
    } else {
      return false
    }
};


function validUtf8_1(data) {
  data = data.map((el) => {
    return el.toString(2).padStart(8, '0')
  })
  console.log(data);
  while(data.length) {
    let top = data.shift();
    let len = top.split('0', 1)[0].length
    if( len > 4 || len === 1) {
      return false
    }
    for(let i = 0; i < len - 1; i ++) {
      let tem = data.shift();
      if(tem === undefined || !(/^10/.test(tem))) 
        return false;
    }
  }

  return true
}
console.log(validUtf8_1([197,130,1]))