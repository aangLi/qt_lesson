import React, { Component } from 'react';

class Input extends Component {
  // 静态属性
  state = {
    value: ''
  }
  // 箭头函数
  handleChange = (event) => {
    const value = event.target.value
    
    this.setState({
      value
    })
  }

  handleSubmit = () => {
    const { value } = this.state;
    const { onRecevie } = this.props
    // 回调 函数
    onRecevie(value)
    console.log('---', value)
  }

  // 单向数据流
  // input 受控组件 完全受 state.value 的控制np
  render() {
    const { value } = this.state;
    return (
      <>
        <input type="text" value={value}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}

class CommentList extends Component {
  render() {
    const { clist } = this.props
    return (
      <React.Fragment>
        {
          clist.map((list, index) => {
            return (
              <li key={ index }>
                { list.content }
              </li>
            )
          })
        }
      </React.Fragment>
    )
  }
}

class Comment extends Component {
  state = {
    // 评论的列表
    clist: [
      { content: 'AANGLI' }
    ]
  }

  handleRecevieComment = (list) => {
    console.log("父组件的value" + list)
    // 不可变数据
    let clist = this.state.clist.slice(0);
    debugger;
    clist.push({ content: list });
    console.log('clist', clist);
    this.setState(
      {
        clist
      }
    )
  }

  render() {
    const { clist } = this.state;
    return (
      <>
        <Input onRecevie={ this.handleRecevieComment }/>
        <CommentList clist={ clist }/>
      </>
    )
  }
}

export default Comment;