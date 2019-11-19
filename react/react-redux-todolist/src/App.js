import React from 'react';
// hoc
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    const { todolist } = this.props;
    return (
      <div>
        {/* 父节点下面唯一 */}
        {
          todolist.map((item, i) => {
            return (
              <li key = {i}>
                {item.content}
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChange} />
          <button onClick={() => {
            console.log(this.state.inputText)
            this.props.addTodo(this.state.inputText)
            // store.dispatch
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// state
const mapStateToProps = (state) => {
  console.log(state)
  return {
    todolist: state
  }
}
// <App a={1} b={2}/>
// payload 载荷
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO',
        content
      })
    }
  }
}

// connect(App)
// 
export default connect(mapStateToProps, mapDispatchToProps)(App);
