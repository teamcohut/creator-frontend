import React from 'react'
import AuthTemplate from '../../../components/templates/AuthTemplate'
import { Outlet } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <AuthTemplate title='Launch Your Learning Program In 5 Minutes'>
            <Outlet />
        </AuthTemplate>
    </>
  )
}

export default SignUp