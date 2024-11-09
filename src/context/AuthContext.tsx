import { createContext, useReducer, ReactNode, FC } from "react";
interface AuthState {
  user: Record<string, any> | null;
}

type AuthAction = 
  | { type: 'LOGIN'; payload: Record<string, any> } 
  | { type: 'LOGOUT' };

export const AuthContext = createContext<AuthState & { dispatch: React.Dispatch<AuthAction> } | undefined>(undefined);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider: FC<IAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {user: null})

  console.log('AuthContext state: ', state)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}

interface IAuthProvider {
  children: ReactNode
}