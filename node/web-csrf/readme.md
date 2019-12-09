## csrf 跨站请求伪造
1. 过程
  当客户端(c) 访问 网站（b） 并且登录获取信任
  返回 cookie
  然后再没有退出登录的情况 访问 网站（a）
  a 要求 c 发送一个请求给 b
  b 不知道是谁访问则就 使得他们访问成功

2. 解决方案
  1. referer
  通过 访问 request.referer 来判断
  也可以 通过referer 和 host 来设置白名单 形成防盗链
  2. token 放入 cookie
  3. token 放入 header 隐藏