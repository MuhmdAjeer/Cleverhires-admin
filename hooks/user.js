import {  useMutation, useQuery, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'
import {getAllUsers, updateRestriction} from '../api/user'


export const useRestrict = () => {
    console.log('dd');
    const client =useQueryClient()
    return useMutation(updateRestriction,{
        onSuccess : ()=>{
            client.invalidateQueries('ALL_USERS')
            toast.success('User restriction updated!')

        },
        onError : ()=>{
            toast.error('Failed to update! Try again')
        }
    })
}

export const useUsers = () => useQuery('ALL_USERS',getAllUsers)
