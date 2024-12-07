import React, { useContext } from 'react'
import { axiosPrivate } from '../../api/axios'
import { ProgramContext } from '../../context/programs/ProgramContext'

const useGetCohorts = () => {
    const program = useContext(ProgramContext)

    const getCohorts = () => {
        try {
            const response = axiosPrivate.get(`/cohort/program/${program.id}`)
        } catch (error) {
            
        }
    }
  return {}
}