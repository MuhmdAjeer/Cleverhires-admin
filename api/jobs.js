import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:5000/api/v1/admin/jobs'})

export const getJobs = () => API.get('/')
export const changeVisibility = (jobId)=> API.put(`/${jobId}/visibility`)
