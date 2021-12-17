import auth from '@/api/auth'
import { setToken, removeToken, removePermission } from '@/utils/auth'
import { Status } from '@/utils/constants'

const register = ({ commit }, params) => {
  return auth.register(params).then(res => {
    if (res.status === Status.SUCCESS) {
      commit('REGISTER', res.data)
    }
    return res
  }).catch(error => {
    throw error
  })
}

const login = ({ commit }, user) => {
  return auth.login(user).then(res => {
    if (res.status === Status.SUCCESS) {
      setToken(res.data)
      commit('LOGIN_DEFAULT', res.data)
    }
    return res
  }).catch(error => {
    throw error
  })
}

const clear = ({ commit }) => {
  removeToken()
  removePermission()
  commit('CLEAR')
}

export default {
  register,
  login,
  clear
}