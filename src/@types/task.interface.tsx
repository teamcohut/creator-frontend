export interface ITask {
    title: string,
    description?: string,
    dueTime: string,
    dueDate: string,
    assignedToTracks: Array<string>,
    assignedToAll?: boolean,
    cohortId?: string
}

export interface ITasks {
  title: string,
  description?: string,
  dueTime: string,
  dueDate: string,
  assignedToTracks?: Array<string>,
  assignedToAll?: boolean,
  cohortId?: string,
  setModal: () => void
}
