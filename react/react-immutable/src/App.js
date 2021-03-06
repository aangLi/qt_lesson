import React from 'react';
import logo from './logo.svg';
import immutable from 'immutable'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import RedColorWrapper from './RedColor'
import './App.css';
// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS(
  [2, 3, 4]
)
let b = immutableArr.push(5);
// console.log(immutableArr.toJS())
// console.log(b.toJS())

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}



let imObj = immutable.fromJS(obj)
// obj.b && obj.b.c
// console.log(imObj.getIn(['b', 'c'], 'default'))
// let imObj1 = imObj.setIn(['d', 'e'], 'eee')
// console.log(imObj1.toJS())

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    let store = this.state.store.setIn(['d', 'e'], '456')
    this.setState({
      store
    })
  }
  render() {
    const store = this.state.store
    return (
      <div>
        <RedColorWrapper>
          <p>123</p> 
          <div>456</div>
        </RedColorWrapper>
        <button onClick={this.handleSet}>set d</button>
        <Header value={store.get('a')} />
        <Main value={store.get('b')} />
        <Footer value={store.get('d')} />
      </div>
    )
  }
}

export default App;
