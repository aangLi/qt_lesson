// 每个页面的 store 分成模块 分出去又要将其合起来 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import homeReducer from '../pages/home/store/reducer'

// fromJS({home: xxx， detail: xxx}) 组织成一个对象
const reducer = combineReducers({
  home: homeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store