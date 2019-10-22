const userInfo = require('../modal/user-info')

const register = async (ctx) => {
  // 插入数据库
  const user = ctx.query;
  console.log(user)
  let insertRes = await userInfo.insertData(user)
  console.log('插入数据的结果', insertRes);
  ctx.body = insertRes;
}

module.exports = register;