import React from 'react'
import { ISelectInput } from "./Types"
import "./index.css"

const SelectInput: React.FC<ISelectInput> = (props) => {
    const { label, id, icon, onchange, options } = props
  return (
    <>
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
          {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
          <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3 width-full'>
            {icon && icon}
            <select id={id} className="input bg-transparent width-100" name="" onChange={onchange}>
              {
                options && options.map((el, i) => (
                  <option key={i} value={el.value}>{el.content}</option>
                ))
              }
            </select>
          </div>
        </div>
    </>
  )
}


export default SelectInput