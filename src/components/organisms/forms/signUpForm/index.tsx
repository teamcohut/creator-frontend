import React from 'react'
import Button from '../../../atoms/Button'
import EmailInput from '../../../atoms/inputs/EmailInput'
import PasswordInput from '../../../atoms/inputs/PasswordInput'
import CountrySelectInput from '../../../atoms/inputs/CountryInput'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    navigate('success')
  }

  return (
    <form className='form bg-white d-flex flex-column rounded-5' onSubmit={onSubmit} action="">
      <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
      <div className="d-flex flex-column gap-2">
        <h1 className='manrope-600 primary-950 fs-h2'>Create your account</h1>
        <span className='manrope-500 dark-700 fs-body'>Launch your program in no time just by creating an account with us.</span>
      </div>
      
      <div className="d-flex flex-column gap-4">
        <EmailInput
          label='Email'
          id='email'
          onchange={(e:any)=>console.log(e.target.value)}
          placeholder='user@email.com' />
        <PasswordInput 
          label='Password' 
          id='password' 
          showStrength={true}
          onchange={(e:any)=>console.log(e.target.value)} 
          placeHolder='password' />
        <PasswordInput 
          label='Confirm Password' 
          id='cpassword' 
          showStrength={false}
          onchange={(e:any)=>console.log(e.target.value)} 
          placeHolder='password' />
          <CountrySelectInput
            label="Where are you located at? (Optional)"
            id="country"
            />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Button text='Create Account' type='submit' />
        <span className=''>Already have an account? <Link className='primary-700 text-decoration-none' to={"/login"}>Sign in</Link></span>
      </div>
      <div className="footer w-100 d-flex flex-column align-items-center gap-2">
        <div className="d-flex gap-2">
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Privacy Policy.</Link>
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Help.</Link>
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Visit www.cohut.co</Link>
        </div>
        <span className='dark-500 fs-footer text-decoration-none'>(c) 2024 Cohut</span>
      </div>
    </form>
  )
}

export default SignUpForm