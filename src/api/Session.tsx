import { ISessionDTO } from "../@types/session.interface";

class Session {
    client;

    constructor(client: any) {
        this.client = client;
    }

    createSession(payload: ISessionDTO) {
        return this.client.post("/sessions/create-session", payload);
    }
}

export default Session;
