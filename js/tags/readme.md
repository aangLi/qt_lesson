- 参数 js 比较松散， arguments 可以访问
    1. event 在第一位置 事件注册和处理函数的分离
    2. event.target event.target.tagName 为标签的大写字符串
    3. this 指向事件发生的元素，但是 => 函数 this 丢失 默认指向上一级

- ajax fetch 让我们可以主动发起请求，动态网页
    1. 返回的是可读流