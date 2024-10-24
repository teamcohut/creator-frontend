import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const AuthTemplate: FC<IAuthTemplate> = ({ children, title }) => {
  return (
    <>
      <div className='container-fluid justify-content-center form-template px-4 py-6 p-md-5'>
        <div className='row d-flex justify-content-center justify-lg-content-between'>
          <div className='col-6 d-none d-lg-flex flex-column justify-content-between'>
            <Link to={'/'}>
              <img src={'/assets/images/Cohut.png'} alt={'Cohut Logo'} />
            </Link>
            <h1 className='mt-auto text-white'>{title}</h1>
          </div>
          <div className='form-container col-lg-6 d-flex align-items-center justify-content-center'> 
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