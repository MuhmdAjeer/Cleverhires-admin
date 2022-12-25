import axios from 'axios'

const API = axios.create({ baseURL:'https://emarald.online/api/v1/admin/users'})

export const getAllUsers = ()=> API.get('/')
export const updateRestriction = (userId)=> API.put(`${userId}/block`)
