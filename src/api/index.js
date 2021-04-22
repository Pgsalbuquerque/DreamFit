import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dreamfit-api.herokuapp.com'
})

export default api