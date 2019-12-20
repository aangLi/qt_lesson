const defaultState = {
  commentList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'HOME_LIST':
      console.log(action.commentList)
      return {
        ...state,
        commentList:  action.commentList
      }
      default:
        return state;
  }
}