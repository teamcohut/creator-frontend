import React, { FC, useState } from 'react'
import '../style.css'
import { IModal } from '../../../@types/dashboard.interface'

const Modal: FC<IModal> = ({ open, children }) => {
    const [modalOpen, setmodalOpen] = useState(true)
  return (
    <>
        <div onClick={()=> setmodalOpen(false)} className={`modal-bg align-items-center justify-content-center ${modalOpen ? ' d-flex': ' hidden'}`}>
            <div onClick={()=>{}} className='modal-div w-fit h-fit'>
                {children}
            </div>
        </div>
    </>
  )
}

export default Modal