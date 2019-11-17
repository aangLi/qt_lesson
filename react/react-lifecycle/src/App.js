import React from 'react';
import Child1 from './Child1'
import logo from './logo.svg';
import Parent from './Parent'
import './App.css';

class App extends React.Component {
  // state = {
  //   list: [1, 2, 3],
  //   show: false
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     let list = this.state.list.slice(0);
  //     list.push(44);
  //     this.setState({
  //       list
  //     })
  //   }, 1000);
  // }
  // render() {
  //   return(
  //     <>
  //       <button onClick={() => {
  //         this.setState({
  //           show: !this.state.show
  //         })
  //       }}>卸载组件</button>
  //       {!this.state.show ? <Child1 list={this.state.list} /> : null}
  //     </>
  //   )
  // }

  render () {
    return (
      <Parent />
    )
  }
}

export default App;
