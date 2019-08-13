// 1表示1 []表示一个字符的范围 {}表示匹配多少次

// 查找是否符合规则的字符串。
// ^ 开头 $ 结尾
// () 分组
// let phoneReg = /^1[3-9][0-9]\d{9}$/;
// console.log(phoneReg.test('138888888888'));
// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = '我的号码是13888888888，收下吧';
// // 得到手机号，判断服务商
// let phoneModal = [
//     '{phone}，电信',
//     '{phone}，移动'
// ]
// console.log(str.match(phoneReg));

// 754211506@qq.com 邮箱服务商
// + 匹配一次或者多次
let emailReg = /^([0-9a-zA-Z\-_]+)@([0-9a-zA-Z\-_]+)\.([0-9a-zA-Z\-_]+)$/;
console.log(emailReg.test('754211506@qq.com'));