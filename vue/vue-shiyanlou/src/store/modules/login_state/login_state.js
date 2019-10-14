const state = {
  on_or_up: 'on',
  sign_on: false, // 登录状态， false 未登录， true 登录
  show_login_dialog: false,
  user_info: { // 用户信息
    id: 1,
    awatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    user_name: 'AANGLI'
  }
}

const actions = {
  change_show_state(context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
}

const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}