import React, { Children, FC, ReactNode, useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import { Navigate } from 'react-router-dom'

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
    const { user } = useContext(AuthContext)
    
    if (!user) {
        return ( 
        <Navigate to={'/login'} />
    )
    } else {
        return (
            <div>{children}</div>
        )
    }
    
//   return (
//     <>
//         {
//             user?
//             <>
//                 {Children}
//             </>:
//             <Navigate to="/login"/>
//         }
//     </>
//   )
}

interface IRequireAuth {
    children: ReactNode
}

export default RequireAuth