import React from 'react'
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import EmailInput from '../../../atoms/inputs/EmailInput';
import PasswordInput from '../../../atoms/inputs/PasswordInput';
import Button from '../../../atoms/Button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('')
  }
  return (
    <form className='form bg-white d-flex flex-column rounded-5' onSubmit={handleSubmit} action="">
        <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>    
          <div className="d-flex flex-column gap-2">
            <h1 className='manrope-600 primary-950 fs-h2'>Sign in to your account.</h1>
            <span className='manrope-500 dark-700 fs-body'>Get into your dashboard in less than 1 minute.</span>
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
                <span><Link className='primary-700 text-decoration-none' to={"/login/forgot-password"}>Forgot password?</Link></span>
            </div>
                <div className="d-flex flex-column align-items-center gap-3">
                  <Button text='Sign in' type='submit' />
                  <span>Don't have an account? <Link className='primary-700 text-decoration-none' to={"/signup"}>Create one here</Link></span>
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

export default LoginPage