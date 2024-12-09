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
}



export interface IFullname {
  fullName: string;
}

// export interface IAssessmentCard {
//   header: Array<string>,
//   body: Array<any>;
// }

export interface IAssessmentCard {
  id: string;
  title: string;
  course: string;
  date: string;
  status: "active" | "inactive";
  average: string;
}