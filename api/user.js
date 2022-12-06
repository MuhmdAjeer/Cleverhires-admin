import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:5000/api/v1/admin/users'})

export const getAllUsers = ()=> API.get('/')
export const updateRestriction = (userId)=> API.put(`${userId}/block`)
