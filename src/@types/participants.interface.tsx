export interface IParticipant {
  id: string;
  fullName: string;
  email: string;
  status: "active" | "inactive";
  enrollmentDate: string;
  progress: number;
}

export interface IBadge {
  status: "active" | "inactive";
}

export interface IParticipantTable {
  participants: Array<IParticipant>;
}

export interface IFullname {
  fullName: string;
}
