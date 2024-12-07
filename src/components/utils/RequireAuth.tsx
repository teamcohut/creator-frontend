import React, { FC, ReactNode, useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import { Navigate } from 'react-router-dom'

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user?.email) {
        return (
            <Navigate to={'/login'} />
        )
    } else {
        localStorage.setItem('auth-token', user.authToken)
        return (
            <>{children}</>
        )
    }

}

interface IRequireAuth {
    children: ReactNode
}

export default RequireAuth