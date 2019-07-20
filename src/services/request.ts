import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  headers: {
    Authorization: 'Bearer '
  }
})

export default instance
