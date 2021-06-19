import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ecomerce-api.herokuapp.com/',
})

export default api
