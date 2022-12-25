import axios from 'axios'

const API = axios.create({ baseURL:'https://emarald.online/api/v1/admin/jobs'})

export const getJobs = () => API.get('/')
export const changeVisibility = (jobId)=> API.put(`/${jobId}/visibility`)
export const getHirerRequests = ()=> API.get('/hirer/requests')
export const approveHirer = (hirerId)=> API.put(`/hirer/requests/${hirerId}/approve`)
export const declineHirer = (hirerId)=> API.put(`/hirer/requests/${hirerId}/decline`)
