import React, { FC } from 'react'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
import { IChecklistItem } from '../../../@types/dashboard.interface'

const ChecklistItem: FC<IChecklistItem> = ( { checked, title }) => {
  return (
    <>
        <div className="list d-flex pointer align-items-center justify-content-start">
            {
                checked?
                <FiCheckCircle className='fs-body success-700' />:
                <FiCircle className='fs-body' />
            }
            <span className={`manrope-500 fs-body ${checked? 'dark-300 text-decoration-line-through': 'primary-950'}`}>{title}</span>
        </div>
    </>
  )
}

export default ChecklistItem