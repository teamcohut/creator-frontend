import React, { useState } from 'react'
import AuthTemplate from '../../../components/templates/AuthTemplate'
import { ISignupData } from '../../../@types/forms.interface'
import SignupSuccess from '../../../components/organisms/forms/signUpForm/SignupSuccess'
import SignUpForm from '../../../components/organisms/forms/signUpForm'

const SignUp = () => {
  const [signupSuccess, setsignupSuccess] = useState(false)

  const submitForm = (data: ISignupData) => {
    setsignupSuccess(true)
  }
  return (
    <>
        <AuthTemplate title='Launch Your Learning Program In 5 Minutes'>
        {
          signupSuccess?
          <SignupSuccess />:
          <SignUpForm submitForm={submitForm} />
        }
        </AuthTemplate>
    </>
  )
}

export default SignUp