const Koa = require('koa')
// const KoaBodyParser = require('koa-bodyparser')
var bodyParser = require('koa-bodyparser');
const app = new Koa()
const router = require('./router/index')
app.use(bodyParser())
app.use(async (ctx, next) => {
  // http://localhost:8080/cors.html
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type');
  // 允许 是否发送 cookie ...凭证
  ctx.set('Access-Control-Allow-Credentials', true);
  await next();
})
// ctx.request.body
app.use(router.routes()).use(router.allowedMethods())
app.listen(3003, () => {
  console.log('server is running http://localhost:3003')
})
 