import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button abc="123">登录</Button>
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

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      red: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // render 高频刷新 不采用非静态函数
   handleClick() {
    console.log(this)
    console.log(this.state)
  }
  render() {
    const { abc } = this.props
    const { red } = this.state
    return (
      <button onClick={this.handleClick} style={{ color: red ? 'red' : 'blue' }}>
        {this.props.children}
      </button>
    )
  }
}

export default App;
