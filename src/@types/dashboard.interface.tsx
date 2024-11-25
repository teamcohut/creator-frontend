import { ReactElement, ReactNode } from "react";

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
  title: string;
  subtitle: string | number;
  iconColor: string;
  iconBgColor: string;
  iconBorderColor: string;
  children?: ReactNode;
}

export interface IinfoCardProps {
  title: string;
  subtitle: string;
  isActive: boolean;
  progress?: number;
  isProgressBar?: boolean;
  infoCardIcon: ReactElement<any>;
  infoCardIconBgColor: string;
  isOngoing?: boolean
  dateOfSession?: string
}
