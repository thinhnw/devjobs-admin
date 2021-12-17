import store from '@/store'
import { getToken } from '@/utils/auth'
import { camelCaseKeys } from '@/utils'
import { Status } from '@/utils/constants'

const setup = (instance) => {
  instance.interceptors.request.use(
    function(config) {
      const token = getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    function(err) {
      return Promise.reject(err)
    }
  )
}

const checkToken = (instance) => {
  instance.interceptors.response.use(
    response => {
      if (response.headers['Content-Type'].startsWith('application/json')) {
        response.data = camelCaseKeys(response.data)
      }
    },
    error => {
      if (
        error.response.status === Status.UNAUTHORIZED && !window.location.pathname.includes('login')
      ) {
        store.dispatch('auth/clear')
        window.location.href = window.location.origin + '/login'
      }
      return Promise.reject(error)
    }
  )
}

export default {
  setup,
  checkToken
}