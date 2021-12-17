import axios from 'axios'
import interceptors  from './interceptors'

const Api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

interceptors.setup(Api)
interceptors.checkToken(Api)

export default Api