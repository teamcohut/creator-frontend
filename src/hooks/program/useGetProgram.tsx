import React, { useState } from 'react'
import { axiosPrivate } from '../../api/axios'
import { useProgramContext } from './useProgramContext'

export const useGetProgram = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { dispatch } = useProgramContext()

    const getProgram = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosPrivate.get('/program')
            console.log(response.data.data);
            
            dispatch({type: "SETUP", payload: response.data.data})
            setIsLoading(false)
        } catch (error: any) {
            console.error(error)
            setError(error.message)
            setIsLoading(false)
        }
    }


  return {getProgram, error, isLoading}
}