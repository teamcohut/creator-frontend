import { FC, ReactNode } from "react";

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") as string);

  if (!user?.email) {
    window.location.href = "/login";
  }

  return <>{children}</>;
};

interface IProtectedRoute {
  children: ReactNode;
}
