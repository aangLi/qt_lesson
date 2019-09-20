import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.9.20',
  money: 100
}

const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}

const getters = {
  // 和上面的 count 不一样
  count: function (state) {
    return state.count += 100
  }
}

const actions = {
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    }, 1000);
    console.log('已经提交了makeMoney方法')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})