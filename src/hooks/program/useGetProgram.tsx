import React, { useContext, useState } from 'react'
import { axiosPrivate } from '../../api/axios'
import { useProgramContext } from './useProgramContext'
import { AuthContext } from '../../context/auth/AuthContext'

export const useGetProgram = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { dispatch } = useProgramContext()
    const { user } = useContext(AuthContext)

    const getProgram = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosPrivate.get(`/program/${user.id}`)
            setIsLoading(false)
            dispatch({type: "SETUP", payload: response.data})
        } catch (error: any) {
            console.error(error)
            setError(error.message)
            setIsLoading(false)
        }
    }


  return {getProgram, error, isLoading}
}