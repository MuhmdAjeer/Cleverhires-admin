import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { login } from "../api/auth";
import {useRouter} from 'next/router'
import Cookies from "js-cookie";
export const useLogin = () => {
    const router = useRouter()
    return useMutation(login,{
        onSuccess : ({data})=>{
            Cookies.set('token',data.token)
            router.push('/users')
            toast.success('Welcome Back Admin!')

        },
        onError : (err)=>{
            console.log(err);
            toast.error(err.response.data.message)
        }
    })
}