import React, { useEffect, useState } from 'react'
import UserChoice from '../../components/organisms/forms/CustomizeProgram'
import AuthTemplate from '../../components/templates/AuthTemplate'
import { useParams, useNavigate } from 'react-router-dom'
import AxiosPublic from "../../api/axios";

const VerifyMail = () => {
    const [page, setPage] = useState(1)
    const [selected, setSelected] = useState('')
    const navigate = useNavigate()

    const route = useParams()
    const { id } = route


    useEffect(() => {
      verifyMail()
    }, [])

    const verifyMail = async () => {
      try {
        const response = await AxiosPublic.post(`/auth/activate-account/${id}`)
        if (!response) {
          navigate('/signup')
        }
        // if (response.status === 500) {
          
        // }
        console.log(response);
      } catch (error: any) {
        console.log(error);
        if (error.status === 500) {
          navigate('/signup')
        }
      }
    }
    

  return (
    <>
        <AuthTemplate title='Launch Your Learning Program In 5 Minutes'>
          {
              page === 1?
              <UserChoice onSubmit={(e)=>setSelected(e)} />:
              <></>
          }
        </AuthTemplate>
    </>
  )
}

export default VerifyMail