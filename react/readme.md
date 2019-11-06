## React

React 数据流是单向数据流

- 父子组件传参 通过 
  1. 父： key={value}
  2. 子： key = this.props.key
  3. 针对数据修改的时候需要设置静态变量在赋值

- 函数的设置
  1. 建议设置静态函数
  2. 原因 修改数据时 render 会高频刷新 非静态函数将需要绑定 多次绑定会耗费性能

- static getDerivedStateFromProps(props)
  一种衍生方法，将 props 转化为 state 
  return {
    ....
  }

- React 中的 DOM 操作
  - 创建 DOM 节点
    1. string ref
      绑定
      <element ref="ref1"></element>
      获取
      this.refs.ref1
    2. function ref
      绑定
      <element ref={(ref2) => { this.ref2 = ref2 }}></element>
      获取
      this.refs.ref2
    3. object ref
      绑定
      value = React.createRef()
      <element ref={this.value}></element>
      获取
      this.value

  - forwordRef() ref转发 用于可重复组件 *
