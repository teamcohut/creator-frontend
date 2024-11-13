import React, { useState } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import SignupSuccess from '../../components/organisms/forms/signUpForm/SignupSuccess'
import SignUpForm from '../../components/organisms/forms/signUpForm'

const SignUp = () => {
  const [signupSuccess, setsignupSuccess] = useState(false)

  const submitForm = () => {
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