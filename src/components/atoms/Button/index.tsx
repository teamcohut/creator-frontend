import React from 'react'
import { IButton } from '../../../@types/button.interface'
import './index.css'

const Button: React.FC<IButton> = ({text, type, action, fill}) => {
  return (
    <>
      <button type={type} 
        onClick={()=>action} 
        className={`${fill || fill === null || fill === undefined? 'fill': 'outline'} button rounded-pill manrope-700 w-100`}>
          {text}
      </button>
    </>
  )
}

export default Button