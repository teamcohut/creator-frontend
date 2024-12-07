import { ReactNode } from "react";

export interface IProgramState {
    program: Record<string, any> | null;
  }
  
  export interface IProgramProvider {
      children: ReactNode
    }
  
  export type TProgramAction = 
      | { type: 'SETUP'; payload: Record<string, any> } 
    //   | { type: 'LOGOUT' };