import React from 'react'
import { ITimeInput } from './types'
import '../style.css'

const TimeInput: React.FC<ITimeInput> = (props) => {
    const { id, label, icon, placeHolder, onchange } = props
  return (
    <>
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
          {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
          <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
            {icon && icon}
            <input id={id} className="input bg-transparent w-100 h-100 border-none" type="time" placeholder={placeHolder} onChange={onchange} />
          </div>
        </div>
    </>
  )
}

export default TimeInput