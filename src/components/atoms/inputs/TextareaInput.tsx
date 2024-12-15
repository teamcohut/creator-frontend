import React from 'react'
import { ITextAreaInput } from "./types"
import "../style.css"

const TextAreaInput: React.FC<ITextAreaInput> = (props) => {
  const { label, id, placeHolder, onchange, value } = props
  return (
    <>
      <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
        {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
        <div className='d-flex align-items-center gap-2 rounded px-2'>
          <textarea
            id={id}
            name={id}
            rows={5}
            value={value}
            className="input bg-transparent w-100 border border-1 rounded-4 px-3 py-2"
            placeholder={placeHolder}
            onChange={onchange}
          ></textarea>
        </div>
      </div>
    </>
  )
}

export default TextAreaInput