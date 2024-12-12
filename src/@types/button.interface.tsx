import { ReactNode } from "react";

export interface IButton {
  children: ReactNode | string;
  action: () => void;
  type: "submit" | "reset" | "button";
  fill: boolean;
  outline?: "white" | "primary" | "primary-700";
  border?: boolean;
  gap?: boolean;
  width?: number;
  disabled?: boolean;
  loading?: boolean;
}

export interface IFilterButton {
  text: "All" | "Active" | "Inactive" | "Closed";
}
