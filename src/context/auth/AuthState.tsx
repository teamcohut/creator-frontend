import { FC, ReactNode, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

export const AuthContextProvider: FC<IAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {user: null})

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}

interface IAuthProvider {
  children: ReactNode
}