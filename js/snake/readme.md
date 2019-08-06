- canvas
- JS 异步是核心问题 事件，定时器，fetch/ajax 代码的编写顺序和执行顺序不一样，代码的可读性差
  loadAssets(); 1秒 等待一下
  hideWelcom(); 在他之后
  js 先hideWelcome() loadAssets 执行完成
  js 是单线程语言
  在一次执行中，会把立即执行的代码执行完，再把事件监听、定时器、fetch/ajax 放入单线程的轮询之中
  回调函数

- img.onload 事件
    window.onload 发生在整个页面资源加载完成之后 太慢了
    有没有早一点发生，但是html,css 已经完成
    如果 html, css, js 都没有基本的搭建完成，游戏脚本无法执行

- 函数式编程
    完成开发需求 复杂 复杂的需求分成独立的多个子需求来完成 单独封装成一个函数
    init();
    drawSnake();
    addEvent();
    refreshSnake();
    winOrLoose();
    showResult();