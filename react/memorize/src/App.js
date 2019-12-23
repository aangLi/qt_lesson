import React, { useState, PureComponent, Component,
useMemo,
useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

// React.memo   // 缓存组件
// shouldComponetUpdate
function Count(props) {
  const [val, setVal] = useState(0);
  console.log('render');
  const calc = useMemo(() => {
    console.log('calc');
    return 10 + val;
  }, [val])
  // useMemo 会 第二个参数/数组 前后两个浅比较
  // 如果数组没有变化， 会从缓存中取值

  // 对函数的缓存
  const calc1 = useCallback(() => {
    console.log('calc');
    return 10 + val;
  }, [val])

  return (
    <h3>
      {
        props.count
      }
      { calc }
      <button onClick={() => {
        setVal(0)
      }}>button</button>
    </h3>
  )
}

// 默认 把 this.props nextProps 浅比较 第二参数是比较的函数 如果相等 返回 true 不更新 false 更新
const Count1 = React.memo(Count);
// 可以自己定义方法进行比较
React.memo(Count, (thisProps, nextProps) => {

})

// PureComponent
class Abc extends PureComponent {}
// 默认会返回更新 在 shouldComponentUpdate
class Abc1 extends Component {}

function App() {
  const [ count, setCount ] = useState(0)
  return (
    <div className="App">
      <button onClick={() => {
        setCount(0);
      }}>update count</button>
      <Count1 count={count}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
