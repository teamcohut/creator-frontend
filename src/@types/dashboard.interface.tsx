import { ReactNode } from "react";

export interface IDashboardTemplate {
    children: ReactNode
}

export interface INavLink {
    path: string;
    children: ReactNode;
    type: 'link' | 'dropdown' | 'logout';
    dropdownList: Array<IMenu>
}

type IMenu = {
    path: string;
    icon: ReactNode;
    title: string
}