import { ReactNode } from "react";

export interface IButton {
    children: ReactNode | string,
    action: ()=> void,
    type:  "submit" | "reset" | "button",
    fill: boolean
  }