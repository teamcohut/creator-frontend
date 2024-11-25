import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosPublic } from "../../api/axios";

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const login = async (email:string, password:string) => {
        setIsLoading(true)
        setError(null)

            try {
                const response = await axiosPublic.post('auth/login', {
                    email,
                    password,
                    // country
                })
                const json = response.data
                if(response.status === 200) {
                    localStorage.setItem('user', JSON.stringify(json))
                    dispatch({type: 'LOGIN', payload: json})
                    setIsLoading(false)
                    console.log("login successful:", response.data)
                    // submitForm()
                }
            } catch (error) {
                console.log(error);
                
            }
    }

    return {login, error, isLoading}
}

// type SubmitForm = () => void;