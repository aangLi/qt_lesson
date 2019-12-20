import React from 'react';
import { Link } from 'react-router-dom';
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  componentWillMount() {
    console.log('component will');
  }
  buy () {
    console.log(1234566);
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* 
          localhost:3000/： home -> 服务端生产 html 进入根路由
          点击 Login :3000/login: login -> js ? server ? 是 js 把组件生成html
          刷新下当前页面 当前页面的路由 :3000/login: login --> server 
        */}
        382938929090
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;