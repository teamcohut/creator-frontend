import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordInput from '../../../atoms/inputs/PasswordInput'
import Button from '../../../atoms/Button'
import { IResetPasswordForm } from '../../../../@types/auth.interface'
import { axiosPrivate } from '../../../../api/axios'

const ResetPasswordForm: FC<IResetPasswordForm> = ({ successful }) => {
  const [form, setForm] = useState({password: ''})
  const [isvalid, setIsvalid] = useState(false)

  const handleInputChange = (name: string, value: string) => {
    setForm({...form, [name]: value})
  }

  const confirmPassword = (e: string) => {
    if (e === form.password) {
      setIsvalid(true)
    } else {
      setIsvalid(false)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!isvalid) {
      console.log('Password do not match');
      return
    }
    try {
      const response = await axiosPrivate.post('/auth/reset-password', form)
      if (!response.data.error) {
        console.log(response.data);
        
      }
      successful()
    } catch (error) {
      console.log(error);
      
    }
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
              valid={true}
              showStrength={true}
              onchange={(e:any)=>handleInputChange(e.target.name, e.target.value)} 
              placeHolder='password' />
            <PasswordInput 
              label='Confirm password' 
              id='cpassword' 
              valid={isvalid}
              showStrength={false}
              onchange={(e:any)=>confirmPassword(e.target.value)} 
              placeHolder='password' />
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Button children='Reset Password' type='submit' fill action={()=>{}} />
        </div>
    </form>
  )
}

export default ResetPasswordForm