import axios from 'axios'

const api = axios.create({
  baseURL: "https://apirestacfer.herokuapp.com/"
})

export default api
