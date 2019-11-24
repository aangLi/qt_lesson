import React from 'react';
// 1: h5:history api 2: hash change
// BrowserRouter 就是浏览器的router  第一种方式的路由
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import BaseComponent from './lib/BaseComponent'
import store from './store/index'
import Home from './pages/home/index'

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter 保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            header
            <Route exact path='/' component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
