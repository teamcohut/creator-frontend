import React from 'react'
import { IOtherInput } from '../../../../../@types/input.interface'
import "./index.css"

const Input: React.FC<IOtherInput> = (props) => {
  const {inpType, placeHolder, onchange, icon, label, id} = props
  return (
    <>
      {
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
          {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
          <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
            {icon && icon}
            <input id={id} className="input bg-transparent w-100 h-100 border-none" type={inpType} placeholder={placeHolder} onChange={onchange} />
          </div>
        </div>
      }
    </>
  )
}

export default Input