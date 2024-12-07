import { ReactNode } from "react";

export interface IAuthTemplate {
  children: ReactNode;
  title: string;
  author: string;
}