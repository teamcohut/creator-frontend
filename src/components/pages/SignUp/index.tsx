import React from 'react'
import AuthTemplate from '../../templates/AuthTemplate'
import SignUpForm from '../../ui/organisms/forms/SignUpForm'

const SignUp = () => {
  return (
    <>
        <AuthTemplate>
            <SignUpForm />
        </AuthTemplate>
    </>
  )
}

export default SignUp