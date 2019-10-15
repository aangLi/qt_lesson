// 回调
// promise
// generator
// async 定义一个函数的关键词 await
// async () => {
  // let a = await Promise(); // 接 promise
  // a resolve 时候的值
// }

const Koa = require('koa')
const KoaBody = require('koa-body')
const path = require('path')
const app = new Koa();
const fs = require('fs')
const { promisify } = require('util')
app.use(KoaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    keepExtensions: true,
    uploadDir: path.join(__dirname, '/static/images')
  }
}))
app.use(async (ctx, next) => {
  // http://localhost:3000/  上传文件的表单
  // htpp://localhost:3000/upload
  const method = ctx.method;
  const path = ctx.path;
  console.log(method, path);
  if (method === 'GET' && path === '/') {
    ctx.body = `
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar"/>
        <input type="submit" value="提交" />
      </form>
    `
  } else if (method === 'POST' && path === '/upload') {
    console.log(ctx.request.files)
    // fs.readdir() 不是 promise
    const readdir = promisify(fs.readdir)
    const files = await readdir('./static/images/', 'utf8');
    const htmlTemplate = files.map(file => {
      return `
        <li>
          <a href="/images/${file}">${file}</a>
        </li>
      `
    }).join('')
    ctx.body = htmlTemplate
  }
}); 
app.listen(3001, () => {
  console.log('server is runing 3001');
})