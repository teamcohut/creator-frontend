import React from 'react'
import { IButton } from '../../../@types/button.interface'
import '../style.css'

const Button: React.FC<IButton> = ({ children, type, action, fill, outline, border, gap, width }) => {
  return (
    <>
      <button type={type}
        onClick={action}
        className={`
        ${fill ? 'fill' : 'outline'} 
        ${outline === 'white' ? 'border-white text-white' : outline === 'primary' ? 'primary-600' : ''} 
        ${border ? '' : 'border-none'} 
        ${gap && 'gap'} 
        button rounded-pill manrope-700 fs-button w-100 d-flex align-items-center justify-content-center`}
        style={
          {
            borderColor: `${outline === 'primary' && 'var(--primary-600)!important'}`,
            width: `${width}px`
          }
        }
      >
        {children}
      </button>
    </>
  )
}

export default Button