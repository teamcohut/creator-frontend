import { ReactNode } from "react";

export interface IAuthContext {
  auth: Record<string, any> | null;
  setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISuccessCard {
  title: string;
  description: string;
  email?: string;
  width?: number;
  children?: ReactNode;
  icon: ReactNode;
}

export interface IAuthState {
  user: Record<string, any> | null;
}

export interface IAuthProvider {
  children: ReactNode;
}

export type TAuthAction =
  | { type: "LOGIN"; payload: Record<string, any> }
  | { type: "LOGOUT" };

export interface IUserChoice {
  onSubmit: (selected: string) => void;
}

export interface ISignupForm {
  submitForm: () => void;
}

export interface ISignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPassword {
  verify: () => void;
}

export interface IResetPasswordForm {
  successful: () => void;
  token: string;
  id: string;
}
