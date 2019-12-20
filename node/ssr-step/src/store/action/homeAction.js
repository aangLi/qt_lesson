import axios from 'axios';

export const getCommentList = function () {
  return (dispatch) => {
    // dispatch 返回值
    return axios.get('http://localhost:3003/mapi/comment')
    .then(res => {
      const data = res.data.list;
      dispatch({
        type: 'HOME_LIST',
        commentList: data
      })
    })
  }
}