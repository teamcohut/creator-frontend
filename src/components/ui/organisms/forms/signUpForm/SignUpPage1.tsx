import React from 'react'
import Button from '../../../atoms/forms/Button.tsx'
import EmailInput from '../../../atoms/forms/inputs/EmailInput'
import PasswordInput from '../../../atoms/forms/inputs/PasswordInput'
import SelectInput from '../../../atoms/forms/inputs/SelectInput'
import { Link } from 'react-router-dom'

const SignUpPage1: React.FC = () => {
  return (
    <form className='col-6 bg-white d-flex flex-column' action="">
      <div className="d-flex flex-column gap-2">
        <h1 className='manrope-600 primary-950'>Create your account</h1>
        <span className='manrope-500 dark-700'>Launch your program in no time just by creating an account with us.</span>
      </div>
      <div className="d-flex flex-column gap-4">
        <EmailInput
          label='Email'
          id='email'
          onchange={(e:any)=>console.log(e.target.value)}
          placeHolder='user@email.com' />
        <PasswordInput 
          label='Password' 
          id='password' 
          onchange={(e:any)=>console.log(e.target.value)} 
          placeHolder='password' />
        <PasswordInput 
          label='Confirm Password' 
          id='cpassword' 
          onchange={(e:any)=>console.log(e.target.value)} 
          placeHolder='password' />
        <SelectInput 
          label='Where are you located at? (Optional)' 
          id='country' 
          onchange={(e:any)=>console.log(e.target.value)} />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Button text='Create Account' action={(e: any)=>console.log(e.target.value)} type='button' />
        <span className=''>Already have an account? <Link to={"/glogin"}>Sign in</Link></span>
      </div>
    </form>
  )
}

export default SignUpPage1