
// Create Phone Number
// (123)456-7890
// 编写一个函数，接受一个由10个整数组成的数组
// (123)456-7890 电话号码
// const createPhoneNumber = (err) => createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// Buffer.from([1,2,3,4,5,6,7,8,9,0], 0, 3)
// Buffer.concat()
const createPhoneNumber = (numbers) => {
    let format = '(xxx)xxx-xxx';
    for (num in numbers) {
        format = format.replace('x',num);
    }
    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
