export interface ITask {
    title: string,
    description: string,
    dueTime: string,
    dueDate: string,
    assignedToTracks: Array<string>,
    assignedToAll: boolean,
    cohortId: string
}