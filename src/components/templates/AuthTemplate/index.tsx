import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const AuthTemplate: FC<IAuthTemplate> = ({ children, title }) => {
  return (
    <>
      <div className='container-fluid justify-between form-template px-4 py-6 p-md-5'>
        <div className='row d-flex justify-content-center justify-md-content-between'>
          <div className='col-6 d-none d-md-flex flex-column justify-content-between'>
            <Link to={'/'}>
              <img src={'/assets/images/Cohut.png'} alt={'Cohut Logo'} />
            </Link>
            <h1 className='mt-auto text-white'>{title}</h1>
          </div>
          <div className='col-6 d-flex align-items-center justify-content-center'> 
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

interface IAuthTemplate {
  children: ReactNode,
  title: string;
}

export default AuthTemplate