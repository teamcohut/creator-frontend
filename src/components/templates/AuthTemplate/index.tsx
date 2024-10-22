import React, { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const AuthTemplate: FC<IAuthTemplate> = () => {
  return (
    <>
        <div>
            <div>
                <Link to={'/'}><img  src={'/icons/logo/logo-white.png'} alt={'Cohut Logo'} /></Link>
                <h1>{}</h1>
            </div>
            <Outlet />
        </div>
    </>
  )
}

interface IAuthTemplate {
  children: React.ReactNode
}

export default AuthTemplate