import React, {
  useState,
  useEffect,
  useMemo
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let _state;

function myUseState(initState) {
  _state = _state || initState
  function setState (newState) {
    _state = newState;
    // 重新渲染组件
    render()
  }
  return [_state, setState]
}

let _deps = {
  args: null
}

function myUseEffect(cb, args) {
  const hasChange = _deps.args && args.some(
    (arg, index) => {
      return arg !== _deps.args[index]
    }
  )
  if (hasChange || !_deps.args) {
    cb();
    _deps.args = args
  }
} 

let _depsMemo = {
  args: null,
  value: null
}
function myUseMemo(cb, args) {
  const hasChange = args && args.some((arg, index) => {
    return _depsMemo.args && arg !== _depsMemo.args[index]
  })
  if (hasChange) {
    _depsMemo.value = cb();
    _depsMemo.args = args;
    return _depsMemo.value
  }
  return _depsMemo.value;
}

function myUseCallback(cb, args) {

}

function Counter () {
  console.log(1)
  const [ count, setCount ] = myUseState(0);
  // count ? !== 0
  // count 存起来 1. 闭包
  console.log(count);
  myUseEffect(() => {
    console.log('did mount')
  }, []);


  let res = useMemo(() => {
    return count + 1;
  }, [count])

  // if (true) {
  //   const [test, setTest] = useState(1)
  // }

  return (
    <div>
      count: { count }
      res: { res }
      <button onClick={()=> {
        setCount(Math.random())
      }}>btn</button>
    </div>
  )
}

render();

function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'))
}


// 数组 链表
// 第一次渲染: [{ _state: 0 }, ,]

// 第二次渲染
// 按照出现的顺序 一一取出来

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
