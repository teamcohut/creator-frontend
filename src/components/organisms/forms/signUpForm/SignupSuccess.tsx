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
              <div className="w-auto">
                <Button action={()=>navigate('/resend-mail')} children='Resend Email' type='button' fill={false} border outline='primary' width={192} />
              </div>
        </SuccessCard>
    </>
  )
}

export default SignupSuccess