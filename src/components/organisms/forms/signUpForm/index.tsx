import React, { ChangeEvent, useState } from 'react'
import Button from '../../../atoms/Button'
import EmailInput from '../../../atoms/inputs/EmailInput'
import PasswordInput from '../../../atoms/inputs/PasswordInput'
import CountrySelectInput from '../../../atoms/inputs/CountryInput'
import { Link } from 'react-router-dom'
import '../index.css'
import FormFooter from '../../../molecules/forms/FormFooter'
import { ISignupForm, ISignupData } from '../../../../@types/forms.interface'
import { Country } from '../../../atoms/inputs/types'

const SignUpForm: React.FC<ISignupForm> = ( { submitForm } ) => {
  const [form, setForm] = useState<ISignupData>({email: '', password: '', country: 'Nigeria'})
  const [isvalid, setIsvalid] = useState(false)

  const handleInputChange = (name: string, value: string) => {
    setForm({...form, [name]: value})
  }

  const confirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setIsvalid(e.target.value === form.password)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e);
    if (isvalid) {
      submitForm(form);
      console.log(form);
      
  } else {
      setIsvalid(false);
      console.log("Passwords do not match!");
  }
  }

  return (
    <form className='form bg-white d-flex flex-column rounded-5' onSubmit={()=>handleSubmit} action="">
      <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
      <div className="d-flex flex-column gap-2">
        <h1 className='manrope-600 primary-950 fs-h2'>Create your account</h1>
        <span className='manrope-500 dark-700 fs-body'>Launch your program in no time just by creating an account with us.</span>
      </div>
      
      <div className="d-flex flex-column gap-4">
        <EmailInput
          label='Email'
          id='email'
          onchange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e.target.name, e.target.value)}

          placeholder='user@email.com' />
        <PasswordInput 
          label='Password' 
          id='password' 
          valid={true}
          showStrength={true}
          onchange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e.target.name, e.target.value)} 
          placeHolder='password' />
        <PasswordInput 
          label='Confirm Password' 
          id='cpassword' 
          valid={isvalid}
          showStrength={false}
          onchange={(e: React.ChangeEvent<HTMLInputElement>)=>confirmPassword(e)} 
          placeHolder='password' />
        <CountrySelectInput
          label="Where are you located at? (Optional)"
          id="country"
          onchange={(e: Country)=>handleInputChange('country', e.name)}
          />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Button text='Create Account' type='submit' action={handleSubmit} />
        <span className=''>Already have an account? <Link className='primary-700 text-decoration-none' to={"/login"}>Sign in</Link></span>
      </div>
      <FormFooter />
    </form>
  )
}

export default SignUpForm