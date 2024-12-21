class Track {
    client;

    constructor(client: any) {
        this.client = client;
    }

    createTrack(payload: any) {
        return this.client.post("/track", payload);
    }

    getTrack(cohortId: string) {
        return this.client.get(
            `/track/${cohortId}`
        );
    }

    deleteTrack(trackId: string) {
        return this.client.delete(
            `/track/${trackId}`
        );
    }


}

export default Track;
