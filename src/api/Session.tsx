import { ISessionDTO } from "../@types/session.interface";

class Session {
    client;

    constructor(client: any) {
        this.client = client;
    }

    createSession(payload: ISessionDTO) {
        return this.client.post("/session", payload);
    }

    getSession(cohortId: string, trackId?: string) {
        return this.client.get(
            `/session/cohort/${cohortId}`
        );
    }

    findSession(sessionId: string) {
        return this.client.get(
            `/session/${sessionId}`
        );
    }

    deleteSession(sessionId: string) {
        return this.client.delete(
            `/session/${sessionId}`
        );
    }


}

export default Session;
