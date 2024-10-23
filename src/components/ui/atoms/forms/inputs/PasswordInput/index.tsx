import React, { useState } from 'react'
import { IInput } from '../types'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'
import "../index.css"

const PasswordInput: React.FC<IInput> = (props) => {
    const [showPassword, setshowPassword] = useState(false)
    const { label, id, placeHolder, onchange, icon } = props
  return (
    <>
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
          {label && <label className='manrope-600' htmlFor={id}>{label}</label>}
          <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
            { icon? icon: <FiLock className='icon' /> }
            <input id={id} className="input bg-transparent w-100 h-100 border-none" type={showPassword? "text": "password"} placeholder={placeHolder} onChange={onchange} />
            <button type='button' className='password-eye bg-transparent icon btn border-transparent' onClick={(e)=>setshowPassword(!showPassword)}>{showPassword? <FiEyeOff className='icon' />: <FiEye className='icon' />}</button>
          </div>
        </div>
    </>
  )
}

export default PasswordInput