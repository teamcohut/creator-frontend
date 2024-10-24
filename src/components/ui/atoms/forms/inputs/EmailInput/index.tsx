import { FC } from 'react'
import { IInput } from '../types'
import { FiMail } from "react-icons/fi";
import '../index.css'

const EmailInput: FC<IInput> = (props) => {
    const { label, id, placeHolder, onchange, icon } = props
  return (
    <>
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
          {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
          <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
            { icon? icon: <FiMail className='icon' />}
            <input id={id} className="input bg-transparent w-100 h-100 border-none" type="email" placeholder={placeHolder} onChange={onchange} />
          </div>
        </div>
    </>
  )
}

export default EmailInput