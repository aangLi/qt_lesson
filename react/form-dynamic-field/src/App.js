import React from 'react';
import './App.css';

class DynamicField extends React.Component {
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const { rule } = this.props
    return (
      <>
        <label>
          规则
        </label>
        {
          rule.map((preRule, i) => {
            console.log(i)
            return (
              <div key={i}>
                <div>
                  姓名
                </div>
                {/* 受控组件 */}
                <input type="text" data-key="name" data-index={i} value={preRule.name} onChange={this.props.onFieldChange}></input>
                <div>
                  年龄
                </div>
                <input type="text" data-key="age" data-index={i} value={preRule.age} onChange={(event) => {
                  this.props.onFieldChange(event)
                }}></input>
                <button data-i={i} onClick={() => {
                  this.handleSub(i)
                }}>-</button>
              </div>
            )
          })
        }
        <button onClick={this.handleAdd}> + </button>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0)
    rule.push({ name: '', age: '' })
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    let rule = this.state.rule.slice(0)
    console.log(i)
    rule.splice(i, 1)
    this.setState({
      rule
    })
  }
  handlChange = (event) => {
    const key = event.target.dataset.key;
    const value = event.target.value;
    const index = event.target.dataset.index
    let rule = this.state.rule
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })
  }
  render() {
    const { rule } = this.state
    return (
      <div>
        <label for="date">
          日期
        </label>
        <input type="date" id="date" />
        <DynamicField rule={rule} onAdd={this.handleAdd} onSub={this.handleSub} onFieldChange={this.handlChange} />

      </div>
    )
  }
}

export default App;
