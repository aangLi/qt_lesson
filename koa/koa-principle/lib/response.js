let response = {
  // get 时返回该方法
  get body () {
    return this._body
  },

  set body (value = 404) {
    this.res.statusCode = 200
    this._body = value // 当 body 被 set 的时候保存数据
  }
}



module.exports = response