import { ITask } from "../@types/task.interface";

class Task {
    client;

    constructor (client: any) {
        this.client = client
    }

    createTask(task: ITask) {
        return this.client.post('/task', task)
    }

    getAllTask(cohortId: any) {
        return this.client.get(`/task?cohortId=${cohortId}`)
    }
}

export default Task
