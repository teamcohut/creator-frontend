import React from 'react'
import AuthTemplate from '../../../templates/AuthTemplate'
import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <AuthTemplate>
            <Outlet />
        </AuthTemplate>
    </>
  )
}

export default Login