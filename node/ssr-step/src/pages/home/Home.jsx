import React, { Component } from 'react';
import {
  connect
} from 'react-redux';

import {
  getCommentList
} from '../../store/action/homeAction';

class Home extends Component {
  // 组件已经挂载
  // 服务器 没有组件的全部生命周期
  // 浏览器里面的
  componentDidMount() {
    this.props.getCommentList();
  }
  render() { 
    const { commentList } = this.props
    return ( 
      <div>
        home
        {
          commentList.map((item, index) => {
            return (
              <li key={index}>{item.content}</li>
            )
          })
        }
      </div>
     );
  }
}
/**
 * 服务端返回的页面， 需要带有数据
 * 数据需要： dispatch -> 触发
 * 客户端： mapDispatchToProps -> 交给组件
 * 服务端： 把 这个 dispatch 放在 loadData 静态属性上面
 * vue: {
 *  data: {},
 *  asyncData() {}
 * }
 */
Home.loadData = function (store) {
  // 所有的 loadData 都是 promise ， Promise.all[所有的 Promise]
  // getCommentList 是一个 action 需要 dispatch 它
  return store.dispatch(getCommentList());
}
const mapDispatchToProps = (dispatch) => {
  // 把 dispatch-action 交给 客户端
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    commentList: state.home.commentList
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
