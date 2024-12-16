import React from 'react'
import SuccessCard from '../../../molecules/auth/SuccessCard'
import { FiMail } from 'react-icons/fi'
import Button from '../../../atoms/Button'
import { useNavigate } from 'react-router-dom'

const SignupSuccess = () => {
  const navigate = useNavigate()
  return (
    <>
        <SuccessCard 
            title="You've got mail" 
            description='You have succeeded in creating your account. You can now click the link in your mail to verify your mail'
            icon={<FiMail className='fs-icon success-600' />}>
              <div className="w-auto d-flex flex-column align-items-center gap-5">
              <span className='manrope-500 dark-700 fs-body'>A verification link has been sent to <span className="primary-700"></span>. Please check your inbox and click the link to continue.</span>
              <div className="d-flex flex-column align-items-center gap-2">
                <small className='dark-500 manrope-500 fs-small'>Didn&apos;t get an email?</small>
                <Button action={() => navigate('/resend-mail')} children='Resend Email' type='button' fill={false} border outline='primary' width={192} />
              </div>
            </div>
        </SuccessCard>
    </>
  )
}

export default SignupSuccess