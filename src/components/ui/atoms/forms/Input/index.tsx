import React from 'react'

const Input: React.FC<IInput> = ({inpType}) => {
  return (
    <>
      {
        !inpType || inpType === "text"?
        <div className='input'>
          <input type="text"  placeholder=''/>
        </div>:
        inpType === "email"?
        <div className='input'>
          <input type="email" placeholder='' />
        </div>:
        inpType === "password"?
        <div className='input'>
          <input type="passwo placeholder=''rd" />
        </div>:
        <div className='input'>
          <input type="number placeholder=''" />
        </div>
      }
    </>
  )
}

interface IInput {
  inpType: string
}

export default Input