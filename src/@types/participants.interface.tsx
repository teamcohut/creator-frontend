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

export interface ITable {
  header: Array<string>,
  body: Array<any>;
}

export interface IFullname {
  fullName: string;
}
