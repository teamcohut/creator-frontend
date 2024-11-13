import { ReactNode } from "react";

export interface IDashboardTemplate {
    children: ReactNode
}

export interface INavLink {
    path: string;
    children: ReactNode;
}