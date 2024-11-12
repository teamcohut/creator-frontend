import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosPublic } from "../api/axios";

export const useSignup = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const signup = async (email:string, password:string, country:string, submitForm: SubmitForm) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axiosPublic.post('/v1/auth/register', {
                email,
                password,
                country
            })
            const json = response.data
            if(response.status === 200) {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({type: 'LOGIN', payload: json})
                setIsLoading(false)
                console.log("signup successful:", response.data)
                submitForm()
            }
        } catch (error:any) {
            setError(error.response?.data?.error || "Something went wrong during signup")
            console.error("The main error:", error)
            
        } finally {
            setIsLoading(false)
        }
    }

    return {signup, error, isLoading}
}

type SubmitForm = () => void;