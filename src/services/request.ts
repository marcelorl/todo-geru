import axios from 'axios'

const port = process.env.PORT || 3001

const instance = axios.create({
  baseURL: `//localhost:${port}/`
})

export default instance
