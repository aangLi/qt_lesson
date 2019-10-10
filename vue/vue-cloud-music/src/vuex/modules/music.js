import * as types from '../types'
import findIndex from '@/common/util.js'

const state = {
  playList: [],
  currentIndex: -1,
  playing: false,
  currentSong: ''
}

const mutations = {
  [types.SET_PLAYLIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING] (state, status) {
    state.playing = status
  }
}

const actions = {
  selectPlaySong ({commit}, state, song) {
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 当前列表中是否有待插入的歌曲，并返回其索引
    let fpIndex = findIndex(playList, song)
    // 如果已经包含这首歌曲
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playList = [...playList, song]
      currentIndex = playList.length - 1
    }
    commit(types.SET_PLAYLIST, playList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_PLAYING, true)
  },
  addPlayList ({commit}, state, song) {
    let playList = [...state.playList, song]
    if (playList.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
      commit(types.SET_PLAYING, true)
    }
    commit(types.SET_PLAYLIST, playList)
  }
}

const getters = {
  playList: state => state.playList,
  playing: state => state.playing
}

export default {
  state,
  mutations,
  actions,
  getters
}
