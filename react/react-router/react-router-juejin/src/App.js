import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import reactDom from 'react-dom'
import logo from './logo.svg';
import Layout from './Layout.jsx'
import { createStore } from 'redux'
import './App.css';
// 一切皆组件
// react-router 1.0 dom 2. native 3. 内存

// 决定 Store 长什么样
// state 就是上一份 state
// action 就是提交过去的
function reducer(state,action) {
  if (!state) {
    return {
      count: 4
    }
  }
  const { count } = state
  if (action.type === 'ADD') {
    // 返回全新的对象
    return {
      count: count + 1
    }
  }
  if (action.type === 'SUB') {
    return {
      count: count - 1
    }
  }
}
const store = createStore(reducer)
store.subscribe(() => {
  reactDom.render(<Couter/>,document.getElementById('root'))
})
class Couter extends React.Component {
  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  sub = () => {
    store.dispatch({
      type: 'SUB'
    })
  }
  render() {
    console.log('store:',store.getState())
    return (
      <div>
        count: {store.getState().count}
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*  */}
        <Route path="/" component={Layout} />
      </BrowserRouter>
    )
  }
}
reactDom.render(<Couter/>,document.getElementById('root'))
export default App;
