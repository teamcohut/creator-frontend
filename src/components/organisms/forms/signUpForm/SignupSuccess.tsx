import React from 'react'
import SuccessCard from '../../../molecules/forms/SuccessCard'
import { FiCheckCircle } from 'react-icons/fi'

const SignupSuccess = () => {
  return (
    <>
        <SuccessCard 
            title='Success' 
            description='You have succeeded in creating your account. You can now click the link in your mail to verify your mail'
            icon={<FiCheckCircle className='h1 success-600' />}>

        </SuccessCard>
    </>
  )
}

export default SignupSuccess