import { ReactNode } from "react";

export interface IParticipant {
  id: string;
  fullName: string;
  email: string;
  track: string;
  status: "active" | "inactive";
  enrollmentDate: string;
  progress: number;
}

export interface IBadge {
  status: "active" | "inactive";
}

export interface ITable {
  header: Array<string>,
  body: Array<any>;
  refresh?: () => void;
}



export interface IFullname {
  fullName: string;
}

export interface IAssessmentCard {
  id: string;
  title: string;
  course: string;
  date: string;
  status: "active" | "inactive";
  average: string;
}

export interface ISendMailDTO {
  email: Array<string>,
  setModalOpen: (open: boolean, modal: Modal) => void;
}

type Modal = 'remove' | 'mail' | ''

export interface IDetails {
  email: string[];
  subject: string;
  body: string;
}