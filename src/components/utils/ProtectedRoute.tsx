import { FC, ReactNode } from "react";

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem("authToken") as string);

  if (!authToken) {
    window.location.href = "/login";
  }

  return <>{children}</>;
};

interface IProtectedRoute {
  children: ReactNode;
}
