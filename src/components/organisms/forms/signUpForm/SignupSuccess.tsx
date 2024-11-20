import React from 'react'
import SuccessCard from '../../../molecules/auth/SuccessCard'
import { FiMail } from 'react-icons/fi'

const SignupSuccess = () => {
  return (
    <>
        <SuccessCard 
            title="You've got mail" 
            description='You have succeeded in creating your account. You can now click the link in your mail to verify your mail'
            icon={<FiMail className='h1 success-600' />}>

        </SuccessCard>
    </>
  )
}

export default SignupSuccess