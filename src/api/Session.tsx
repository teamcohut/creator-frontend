import { ISessionDTO } from "../@types/session.interface";

class Session {
    client;

    constructor(client: any) {
        this.client = client;
    }

    createSession(payload: ISessionDTO) {
        return this.client.post("/session", payload);
    }

    getSession(cohortId: string, trackId: string) {
        return this.client.get(
            `/session/${cohortId}`
        );
    }


}

export default Session;
