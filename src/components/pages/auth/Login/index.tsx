import React from 'react'
import AuthTemplate from '../../../templates/AuthTemplate'
import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <AuthTemplate title='Teach what you know, share what you love.'>
            <Outlet />
        </AuthTemplate>
    </>
  )
}

export default Login