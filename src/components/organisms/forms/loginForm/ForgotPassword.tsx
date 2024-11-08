import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmailInput from '../../../atoms/inputs/EmailInput'
import Button from '../../../atoms/Button'
import { FiArrowLeft } from 'react-icons/fi'
import FormFooter from '../../../molecules/forms/FormFooter'

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('')
  }
  return (
    <form className='form bg-white d-flex flex-column rounded-5' onSubmit={handleSubmit} action="">
        <div className="w-100 d-flex justify-content-between">
          <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
          <span className='dark-700 back' onClick={()=>navigate(-1)}><FiArrowLeft /> Back</span>
        </div>
          <div className="d-flex flex-column gap-2">
            <h1 className='manrope-600 primary-950 fs-h2'>Forgot Password?</h1>
            <span className='manrope-500 dark-700 fs-body'>Don't worry, we'll send you an email to verify your account.</span>
          </div>
            <div className="d-flex flex-column gap-4">
                <EmailInput
                  label='Email'
                  id='email'
                  onchange={(e:any)=>console.log(e.target.value)}
                  placeholder='user@email.com' />
            </div>
              <div className="d-flex flex-column align-items-center gap-3">
                <Button text='Send email' type='submit' />
                <span>Remember your password? <Link className='primary-700 text-decoration-none' to={"/login"}>Sign in here</Link></span>
              </div>
              <FormFooter />
    </form>
  )
}

export default ForgotPassword