import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://ecomerce-api.herokuapp.com/',
  baseURL: 'http://localhost:8000',
})

export default api
