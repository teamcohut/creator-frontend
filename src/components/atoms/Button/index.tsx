import React from 'react'
import { IButton } from '../../../@types/button.interface'
import '../style.css'

const Button: React.FC<IButton> = ({children, type, action, fill, outline, border, gap}) => {
  return (
    <>
      <button type={type} 
        onClick={()=>action} 
        className={`${fill? 'fill': 'outline'} ${outline === 'white' && 'border-white text-white'} ${border? 'border': 'border-none'} ${gap && 'gap'} button rounded-pill manrope-700 fs-button w-100 d-flex align-items-center justify-content-center`}>
          {children}
      </button>
    </>
  )
}

export default Button