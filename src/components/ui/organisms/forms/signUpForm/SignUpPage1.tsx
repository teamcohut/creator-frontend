import React from 'react'
import Input from '../../../atoms/forms/Input'
import {FiFlag, FiMail} from 'react-icons/fi'

const SignUpPage1: React.FC = () => {
  return (
    <form className='col-6 bg-white' action="">
      <div className="d-flex flex-column">
        <h1>Create your account</h1>
        <span>Launch your program in no time just by creating an account with us.</span>
        <Input inpType='select' onchange={(e:any)=>console.log(e.target.value)} placeHolder='Enter your name' options={[{value: "Nigeria", content: "Nigeria"}]} icon={<FiFlag className='icon' />} />
      </div>
    </form>
  )
}

export default SignUpPage1