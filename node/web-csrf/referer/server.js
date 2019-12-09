const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'This is server';
  console.log(ctx.request.header.referer)
  console.log(ctx.req.headers.host)
})

app.listen(3002, () => {
  console.log('server is running 3002')
})