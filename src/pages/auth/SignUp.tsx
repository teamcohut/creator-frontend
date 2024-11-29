import React, { useState, useContext } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import SignupSuccess from '../../components/organisms/forms/signUpForm/SignupSuccess'
import SignUpForm from '../../components/organisms/forms/signUpForm'
import { AuthContext } from '../../context/auth/AuthContext'

const SignUp = () => {
  const [signupSuccess, setsignupSuccess] = useState(false)

  const { dispatch, user } = useContext(AuthContext)
  console.log(dispatch, user);
  

  const submitForm = () => {
    setsignupSuccess(true)
  }
  return (
    <>
        <AuthTemplate title='Launch Your Learning Program In 5 Minutes'>
        {
          user?
          <SignupSuccess />:
          <SignUpForm submitForm={submitForm} />
        }
        </AuthTemplate>
    </>
  )
}

export default SignUp