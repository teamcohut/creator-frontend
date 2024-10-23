import React, { useState } from 'react'
import "./index.css"
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'

const Input: React.FC<IInput> = ({inpType, placeHolder, onchange, options, icon}) => {
  const [showPassword, setshowPassword] = useState(false)
  return (
    <>
      {
        !inpType || inpType === "text"?
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
          {icon && icon}
          <input className="input bg-transparent" type="text"  placeholder={placeHolder} onChange={onchange}/>
        </div>:
        inpType === "email"?
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
          {/* {icon && icon} */}
          <FiMail className='icon' />
          <input className="input bg-transparent" type="email" placeholder={placeHolder} onChange={onchange} />
        </div>:
        inpType === "password"?
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
          {/* {icon && icon} */}
          <FiLock className='icon' />
          <input className="input bg-transparent" type={showPassword? "text": "password"} placeholder={placeHolder} onChange={onchange} />
          <button type='button' className='password-eye bg-transparent icon btn border-transparent' onClick={(e)=>setshowPassword(!showPassword)}>{showPassword? <FiEyeOff className='icon' />: <FiEye className='icon' />}</button>
        </div>:
        inpType === "number"?
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
          {icon && icon}
          <input className="input bg-transparent" type="number" placeholder={placeHolder} onChange={onchange} />
        </div>:
        inpType === "select"?
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3 width-full border-black'>
          {icon && icon}
          <select className="input bg-transparent width-100" name="" id="" onChange={onchange}>
            {
              options && options.map((el, i) => (
                <option key={i} value={el.value}>{el.content}</option>
              ))
            }
          </select>
        </div>:
        <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
          {icon && icon}
          <input className="input bg-transparent" type={inpType} placeholder={placeHolder} onChange={onchange} />
        </div>
      }
    </>
  )
}

interface IInput {
  inpType: string,
  placeHolder: string,
  onchange: any,
  options? : Array<option>,
  icon?: any
}

type option = {
  value: string,
  content: string
}

export default Input