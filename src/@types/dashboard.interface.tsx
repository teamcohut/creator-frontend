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

export interface ITitle {
  text: string;
  children?: ReactNode;
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
  subtitle?: string | number;
  iconBgColor: string;
  iconBorderColor?: string;
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
  isOngoing?: boolean;
  dateOfSession?: string;
}

export interface ISetupProgram {}

export interface ICohort {
  number: number;
  description: string;
  startDate: string;
  endDate: string;
  hasTrack: boolean;
  program: string;
}

export interface IModal {
  open: boolean;
  setModalOpen: (open: boolean) => void;
  children: ReactNode;
}

export interface ISetupModal {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export type TModal = "program" | "cohort" | "session" | "task" | null;

export type TActiveModal = "program" | "cohort" | null;
