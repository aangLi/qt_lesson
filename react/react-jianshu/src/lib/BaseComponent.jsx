import React, { Component } from 'react';
import { is } from 'immutable'
class BaseCom extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      console.log(Object.keys(thisProps).length, Object.keys(nextProps).length, 'Object')
      return true
    }
    // {a: 1, b: 2} {a: 2, b: 2, c: 3}
    // css in js
    // BEM
    // stylus sm-2 sm-4
    // css-module .text -> .text-{hash}
    // css in js 样式定义成组件 css 变量和 js 变量共享
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        console.log(thisProps[key], nextProps[key], 'Props')
        return true
      }
    }
    return false
  }
}

export default BaseCom;