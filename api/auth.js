import axios from 'axios'

const API = axios.create({ baseURL:'https://emarald.online/api/v1/admin'})

export const login = (values) => API.post('/login',values)