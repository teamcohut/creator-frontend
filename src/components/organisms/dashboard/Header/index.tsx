import React, { FC } from 'react'
import { IHeader } from '../../../../@types/dashboard.interface'
import './index.css'

const Header: FC<IHeader> = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="dashboard-header d-flex justify-content-between align-items-start">
        <div className="d-flex flex-column align-items-start">
          <h1 className='manrope-600 fs-h3 primary-950'>{title}</h1>
          <span className='manrope-500 fs-body'>{subtitle}</span>
        </div>
        <div className='d-flex align-items-center gap-4'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Header