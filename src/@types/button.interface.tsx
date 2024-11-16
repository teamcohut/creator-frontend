import { ReactNode } from "react";

export interface IButton {
    children: ReactNode | string,
    action: ()=> void,
    type:  "submit" | "reset" | "button",
    fill: boolean,
    outline?: 'white',
    border?: boolean,
    gap?: boolean
  }

export interface IFilterButton {
  text: 'All' | 'Active' | 'Inactive' | 'Closed',
}