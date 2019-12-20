import express from 'express';
import routes from '../routers'
import { matchRoutes } from 'react-router-config'
import render from './render';
import { getServerStore } from '../store/index'
/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */
const app = new express();
//前端打包完的静态资源
app.use(express.static('public'))
/**
 * 渲染 html 之前 保证 redux 有数据， 渲染出来的页面就是带有数据的html
 * 1. 拿到 当前访问的 url 命中组件
 * 2. 拿到 组件上面的loadData
 * 3. 一个个 dispatch 他们
 * 4. 等待请求都完成后， 渲染
 */

app.get('*', (req, res) => {
  const store = getServerStore();
  let promises = []
  // 1.
  const matchedRouters = matchRoutes(routes, req.path);
  matchedRouters.forEach(mRouter => {
    // 2.
    // console.log(">>>:", mRouter.route.loadData);
    if (mRouter.route.loadData) {
      promises.push(mRouter.route.loadData(store))
    }
  })
  // 3
  Promise.all(promises).then(resArr => {
    // 4.
    const html = render(req, store);
    res.send(html)
  }).catch(err => {
    console.log('服务端出错了', err);
  })
 

  
})
app.listen(3000, () => {
  console.log('server is running 3000');
})