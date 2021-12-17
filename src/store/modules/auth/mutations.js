import { pascalCaseKeys } from '@/utils'
const REGISTER = (state, payload) => {
  const auth = pascalCaseKeys(payload)
  state.auth = Object.assign({}, auth)
}

const LOGIN_DEFAULT = (state, token) => {
  state.auth.token = token
}

const CLEAR = (state) => {
  state.auth = {}
}

export default {
  REGISTER,
  LOGIN_DEFAULT,
  CLEAR
}