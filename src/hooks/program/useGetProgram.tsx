import { useState } from 'react'
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
            dispatch({type: "PROGRAMS", payload: response.data.data})
            dispatch({type: "ACTIVE_PROGRAM", payload: response.data.data[0]})
            setIsLoading(false)
        } catch (error: any) {
            console.error(error)
            setError(error.message)
            setIsLoading(false)
        }
    }


  return {getProgram, error, isLoading}
}