## 阿里巴巴2017秋招前端笔试题
1. 下面的 JSX 代码中， 哪一个无法达到预期的效果
  1. `<h2>Hello World</h2>`
  2. `<input type="checkbox"/>`
  3. `<div class="msg-box">{msg}</div>`
  4. `<label htmlFor="name">Leo</label>`
  5. `<div style={{ height: 50 }}></div>`
  6. `<img src={imgSrc} alt="" />`

  答案： 3 由于 class 再 JSX 中是一个 关键字

2. 正则表达式 `/a+(bab)?(caac)*/`, 下列选项中是该正则表达式的子集是？
  1. `/(bab)(caca)`
  2. `/a(bab){2}(caac)*/`
  3. `/a{2}/`
  4. `/a+(bab){0,1}(ca)+(ca)/`
  5. `/a(^bab)+(caac){1,}/`
  6. `/a+(babc){2,}(acc){1,}/`

  a 1/many
  bab 0/1
  caac 0/many
  答案：3

3. 下列说法错误的是：
  1. 在Blink和WebKit的浏览器中， 某个元素具有3D或透视变换 {perspective transform} 的CSS属性， 会让浏览器创建单独的图层。
  2. 我们平时会使用left和top属性来修改元素的位置， 但left和top会触发重布局， 取而代之的更好方法是使用translate， 这个不会触发重布局。
  3. 移动端要想动画性能浏览， 应该使用3D硬件加速， 因此最好给页面中的元素尽量添加transla3D或者translateZ(0)来触发3D硬件加速。
  4. 解决浏览器渲染的性能问题时， 首要目标就是要避免重绘和重排

  答案： 3

4. 将数组var a=[1,2,3]变成数组[4,3,2,1]下面的方式正确的是？
  1. a.reverse().unshift(4)
  2. a.push(4).reverse() 4.reverse()
  3. a.push(4);a.reverse()
  4. a.splice(3,1,4).reverse() [].reverse()

  答案：1/3

5. 目前HTTP2协议已经逐渐普及到日常服务器中， 以下对于HTTP2协议描述正确的是：
  1. 所有http请求都建立在一个TCP请求上， 实现多了复用
  2. 可以给请求添加优先级
  3. server push
  4. 从而减少流量传输

  答案：1，2，3，4

  HTTP2 特点：
  - 多项请求与响应： http1. req1 req2 .... 解决了http1.x 中存在的队首阻塞
  - 请求优先级
  - 请求都建立在一个TCP请求上， 实现多路复用
  - 服务器推送
  - 首部压缩