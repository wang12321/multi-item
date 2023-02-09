import { getToken, setToken, removeToken } from '@dbpc/utils/auth'
import { resetRouter } from '@dbpc/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    isBtnLoading: false // 全局请求状态
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_BTNLOADING: (state, loading) => {
    state.isBtnLoading = loading
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // const { postUserLoginApi } = userModule
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', 'admin-token')
      // postUserLoginApi({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      setToken('admin-token')
      resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },
  // get user info
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const data = {
        permission: [2],
        introduction: 'I am an admin',
        name: '管理员'
      }
      if (!data) {
        return reject('Verification failed, please Login again.')
      }
      const { name } = data
      commit('SET_NAME', name)
      resolve(data)
      // postUserInfoApi({ token: getToken() }).then(response => {
      //   const { data } = response
      //   if (!data) {
      //     return reject('Verification failed, please Login again.')
      //   }
      //   const { name } = data
      //   commit('SET_NAME', name)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

