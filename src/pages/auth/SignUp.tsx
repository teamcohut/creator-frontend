import React, { useContext } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import SignupSuccess from '../../components/organisms/forms/signUpForm/SignupSuccess'
import SignUpForm from '../../components/organisms/forms/signUpForm'
import { AuthContext } from '../../context/auth/AuthContext'

const SignUp = () => {

  const { dispatch, user } = useContext(AuthContext)
  // console.log(dispatch, user);
  

  return (
    <>
        <AuthTemplate title='Launch Your Learning Program In 5 Minutes'>
        {
          user?
          <SignupSuccess />:
          <SignUpForm />
        }
        </AuthTemplate>
    </>
  )
}

export default SignUp