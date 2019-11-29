'use strict';
const Controller = require('egg').Controller

class LoginController extends Controller {
  async register () {
    const { ctx } = this
    // ctx.throw(400, '')
    console.log(ctx.request.body)
    const {password, username, email} = ctx.request.body
    console.log(password, username, email)
    // ctx.body = {statusCode:200, mes: '注册成功'}
    // controller -> service
    await ctx.service.user.register(
      {
        password,
        username,
        email
      }
    )
  }
  async login () {
    const { ctx } = this
    const {password, username, email} = ctx.request.body
    ctx.body = {statusCode: 200, mes: '登录成功'}
  }
}

module.exports = LoginController