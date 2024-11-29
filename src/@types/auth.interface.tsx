import { ReactNode } from "react";

export interface IAuthContext {
    auth: Record<string, any> | null; 
    setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    persist: boolean;
    setPersist: React.Dispatch<React.SetStateAction<boolean>>;
  }

export interface ISuccessCard {
    title: string,
    description: string,
    children?: React.ReactNode,
    icon: React.ReactNode
}

export interface IAuthState {
  user: Record<string, any> | null;
}

export interface IAuthProvider {
    children: ReactNode
  }

export type TAuthAction = 
    | { type: 'LOGIN'; payload: Record<string, any> } 
    | { type: 'LOGOUT' };

export interface IUserChoice {
  onSubmit: (selected: string) => void
}