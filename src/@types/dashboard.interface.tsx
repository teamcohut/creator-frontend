import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface INavLink {
  path: string;
  children: ReactNode;
  type: "link" | "dropdown" | "logout";
  dropdownList: Array<IMenu>;
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
  title: string;
};

export interface IOverviewCard {
  icon: ReactElement<any>;
  topText: string | number;
  bottomText: string | number;
  iconColor: string;
  iconBgColor: string;
  iconBorderColor: string;

}


