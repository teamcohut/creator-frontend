import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthTemplate from '../../components/templates/AuthTemplate'
import ForgotPassword from '../../components/organisms/forms/loginForm/ForgotPassword'
import ResetPasswordForm from '../../components/organisms/forms/loginForm/ResetPasswordForm'
import SuccessCard from '../../components/molecules/auth/SuccessCard'
import Button from '../../components/atoms/Button'
import { FiCheckCircle } from 'react-icons/fi'

const ResetPassword = () => {
    const [status, setStatus] = useState<status>('unverified')
    const navigate = useNavigate()

    const verify = () => {
      setStatus('verified')
    }

    const successful = () => {
      setStatus('successful')
    }

  if (status === 'unverified') {
    console.log(status);
    
    return (
      <>
        <AuthTemplate title='The simplest solution is often the best solution.'>
          <ForgotPassword verify={verify} />
        </AuthTemplate>
      </>
    )
  } else if (status === 'verified') {
    console.log(status);
    
    return (
        <>
          <AuthTemplate title='The simplest solution is often the best solution.'>
            <ResetPasswordForm successful={successful} />
          </AuthTemplate>
        </>
      )
  } else if (status === 'successful') {
    console.log(status);
    
    return (
        <>
          <AuthTemplate title='The simplest solution is often the best solution.'>
            <SuccessCard icon={<FiCheckCircle className='fs-icon success-600' />} title='Successful' description='You have succeeded in resetting your password. You can now sign in to your account'>
              <Button fill children='Sign In' action={()=>{navigate('/login')}} type='button' width={192} />
            </SuccessCard>
          </AuthTemplate>
        </>
      )
  }
  return <></>
}

type status = 'unverified' | 'verified' | 'successful'

export default ResetPassword