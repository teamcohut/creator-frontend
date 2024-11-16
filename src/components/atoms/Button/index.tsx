import React from 'react'
import { IButton } from '../../../@types/button.interface'
import './index.css'

const Button: React.FC<IButton> = ({children, type, action, fill, border, gap}) => {
  return (
    <>
      <button type={type} 
        onClick={()=>action} 
        className={`${fill || fill === null || fill === undefined? 'fill': 'outline'} ${border? 'border': 'border-none'} ${gap && 'gap'} button rounded-pill manrope-700 fs-button w-100 d-flex align-items-center justify-content-center`}>
          {children}
      </button>
    </>
  )
}

export default Button