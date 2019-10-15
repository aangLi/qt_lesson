const Koa = require('koa');
const student = new Koa();
// const manage = new Koa();
// 中间件
student.use(async (ctx, next) => {
  console.log(ctx.path, ctx.query)
  ctx.body = 'hello world';
  await next();
  console.log('middleWare1');
});

student.use(async (ctx, next) => {
  await next();
  console.log('middleWare2');
});

student.use(async (ctx, next) => {
  console.log('middleWare3');
});

student.listen(3000, () => {
  console.log('server is running 3000')
})