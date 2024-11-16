import { ReactNode } from "react";

export interface INavLink {
    path: string;
    children: ReactNode;
    type: 'link' | 'dropdown' | 'logout';
    dropdownList: Array<IMenu>
}

export interface IHeader {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export interface IChecklistItem {
    checked: boolean;
    title: string;
}

type IMenu = {
    path: string;
    icon: ReactNode;
    title: string
}