import React from 'react'
import { IRadioInput } from '../../../../../../@types/input.interface'
import '../index.css'

const CustomRadioInput: React.FC<IRadioInput> = ({ id, name, icon, label, selected, click}) => {
  return (
    <>
        <div onClick={click} className={`${selected && 'active'} input-div d-flex align-items-center rounded-5 p-3`}>
            <label className='d-flex align-items-center gap-2 manrope-600 fs-body promary-950' htmlFor={id}>{ icon && icon }{ label }</label>
            <input className='hidden' type="radio" name={name} id={id} />
        </div>
    </>
  )
}

export default CustomRadioInput