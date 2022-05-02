import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mayan-place-api.herokuapp.com/'
})

export default instance