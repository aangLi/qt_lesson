const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'This is danger';
  ctx.body = `<a href="http://127.0.0.1:3000">go to client</a>`
  console.log('server is running 3001')
})

app.listen(3001)