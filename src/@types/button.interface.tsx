import { ReactNode } from "react";

export interface IButton {
    children: ReactNode | string,
    action: ()=> void,
    type:  "submit" | "reset" | "button",
    fill: boolean,
    outline?: 'white' | 'primary',
    border?: boolean,
    gap?: boolean,
    width?: number
  }

export interface IFilterButton {
  text: 'All' | 'Active' | 'Inactive' | 'Closed',
}