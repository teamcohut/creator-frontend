import React from 'react'
import './index.css'

const Button: React.FC<IButton> = ({text, type, action}) => {
  return (
    <>
      <button type={type} onClick={()=>action} className='button btn border-none rounded-pill manrope-700 w-100'>{text}</button>
    </>
  )
}

interface IButton {
  text: string,
  action?: any,
  type:  "submit" | "reset" | "button",

}

export default Button