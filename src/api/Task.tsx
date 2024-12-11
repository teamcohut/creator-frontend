import { ITask } from "../@types/task.interface";

class Task {
    client;

    constructor (client: any) {
        this.client = client
    }

    createTask(task: ITask) {
        return this.client.post('/task', task)
    }
}

export default Task