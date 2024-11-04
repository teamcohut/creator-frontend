import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../../atoms/inputs/passwordInput'
import Button from '../../../atoms/Button'

const ResetPassword: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/login/reset-password-success')
  }
  return (
    <form className='form bg-white d-flex flex-column rounded-5' onSubmit={handleSubmit} action="">
        <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>    
        <div className="d-flex flex-column gap-2">
          <h1 className='manrope-600 primary-950 fs-h2'>Reset Password.</h1>
          <span className='manrope-500 dark-700 fs-body'>Now you have successfully verified your account, we advise that you change your password.</span>
        </div>
        <div className="d-flex flex-column gap-4">
            <PasswordInput 
              label='New password' 
              id='password' 
              onchange={(e:any)=>console.log(e.target.value)} 
              placeHolder='password' />
            <PasswordInput 
              label='Confirm password' 
              id='password' 
              onchange={(e:any)=>console.log(e.target.value)} 
              placeHolder='password' />
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Button text='Reset Password' type='submit' />
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

export default ResetPassword