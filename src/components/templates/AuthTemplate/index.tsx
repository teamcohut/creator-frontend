import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const AuthTemplate: FC<IAuthTemplate> = ({children}) => {
  return (
    <>
        <div className='justify-between items-stretch form-template col-7 px-4 py-6 p-md-5'>
            <div>
                <Link to={'/'}><img  src={'/icons/logo/logo-white.png'} alt={'Cohut Logo'} /></Link>
                <h1>Launch Your Learning Program in 5 Minutes.</h1>
            </div>
            {children}
        </div>
    </>
  )
}

interface IAuthTemplate {
  children: React.ReactNode
}

export default AuthTemplate