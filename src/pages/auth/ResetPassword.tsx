import React, { useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import AuthTemplate from '../../components/templates/AuthTemplate';
import SuccessCard from '../../components/molecules/auth/SuccessCard';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/atoms/Button';
import ResetPasswordForm from '../../components/organisms/forms/loginForm/ResetPasswordForm';

const ResetPassword = () => {
    const [successful, setSuccessful] = useState<boolean>(false)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const token = searchParams.get('token')
    const id = searchParams.get('id')

    const success = () => {
        setSuccessful(true)
    }

    if (token == null || id == null) {
        return (
          <AuthTemplate title='The simplest solution is often the best solution.'>
              <Navigate to={'/login'} />
          </AuthTemplate>
      )
    }

    if (!successful) {
        return (
            <AuthTemplate title='The simplest solution is often the best solution.'>
                <ResetPasswordForm successful={success} token={token} id={id} />
            </AuthTemplate>
        )
    }
    
  return (
    <>
        <AuthTemplate title='The simplest solution is often the best solution.'>
          <SuccessCard icon={<FiCheckCircle className='fs-icon success-600' />} title='Successful' description='You have succeeded in resetting your password. You can now sign in to your account'>
            <div>
              <Button fill children='Sign In' action={()=>{navigate('/login')}} type='button' width={192} />
            </div>
          </SuccessCard>
        </AuthTemplate>
    </>
  )
}

export default ResetPassword