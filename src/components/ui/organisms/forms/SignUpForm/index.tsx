import React from 'react'

const SignUpForm: React.FC<any> = () => {
  return (
    <form action='' className='form-card'>
        <h1 className='manrope-600 fs-1'>Create your account</h1>
    </form>
  )
}

interface ISignUPForm {
    children: React.ReactNode
}

export default SignUpForm