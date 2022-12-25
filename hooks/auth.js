import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { login } from "../api/auth";
import {useRouter} from 'next/router'

export const useLogin = () => {
    const router = useRouter()
    return useMutation(login,{
        onSuccess : ()=>{
            router.push('/users')
            toast.success('Welcome Back Admin!')

        },
        onError : (err)=>{
            console.log(err);
            toast.error(err.response.data.message)
        }
    })
}