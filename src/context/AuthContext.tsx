import { createContext, useState, useEffect, useContext, FC, ReactNode } from "react";
import { IAuthContext } from "../@types/auth.interface";


const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [auth, setAuth] = useState<Record<string, any>>({});
  const [persist, setPersist] = useState<boolean>(
    JSON.parse(localStorage.getItem("persist") || "false")
  );

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
