const Koa = require('koa');
const views = require('koa-views')
const path = require('path')
const app = new Koa();

// logger

app.use(views(path.join(__dirname, './view')), {
  extension: 'ejs'
})

app.use(async ctx => {
  // ctx.body = 'This is client';
  await ctx.render('client')
})

app.listen(3000, () => {
  console.log('client is starting at port 3000')
})