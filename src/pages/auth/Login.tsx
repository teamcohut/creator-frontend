import React from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import LoginPage from '../../components/organisms/forms/loginForm/LoginPage'
// import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <AuthTemplate title='Teach what you know, share what you love.'>
            <LoginPage />
        </AuthTemplate>
    </>
  )
}

export default Login