import { ReactElement, ReactNode } from "react";

export interface IStatus {
  status: TStatus;
}

export type TStatus = "pending" | "error" | "success"

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
  isActive?: boolean;
  progress?: number;
  isProgressBar?: boolean;
  infoCardIcon: ReactElement<any>;
  infoCardIconBgColor: string;
  isOngoing?: boolean;
  dateOfSession?: string;
}

export interface ISetupProgram {}

export interface ISetup {
  icon: React.ReactNode;
  subtitle1: string;
  title: string;
  subtitle2?: string;

}

export interface ICohort {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  hasTrack: boolean;
  program: string;
}

export interface IModal {
  open: boolean;
  setModalOpen: any;
  children: ReactNode;
}

export interface ISetupModal {
  modalOpen: boolean;
  setModalOpen: (open: boolean, name: TModal) => void;
  setCurrentStep?: (step: number) => void;
}

export type TModal = "program" | "cohort" | "participant" | "session" | "task" | "deletecohort" | "deleteProgram" | "changeProgramImages" | "changepassword" | "deactivateaccount" | "addAdmin" | null;

export type TActiveModal = "program" | "cohort" | null;
