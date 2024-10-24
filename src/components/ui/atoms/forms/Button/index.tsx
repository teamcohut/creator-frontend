import React from 'react'
import './index.css'
import { IButton } from '../../../../../@types/button.interface'

const Button: React.FC<IButton> = ({text, type, action}) => {
  return (
    <>
      <button type={type} 
        onClick={()=>action} 
        className='button btn border-none rounded-pill manrope-700 w-100'>
          {text}
      </button>
    </>
  )
}

export default Button