import axios from 'axios'

const port = process.env.PORT || 3001

const instance = axios.create({
  baseURL: `http://localhost:${port}/`
})

export default instance
