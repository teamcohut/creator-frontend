class Participant {
  client;

  constructor(client: any) {
    this.client = client;
  }

  getParticipants(cohortId: string) {
    return this.client.get(`/cohort/get-participants/${cohortId}`);
  }

  inviteIndividualParticipant(cohortId: string, data: any) {
    return this.client.put(`/cohort/${cohortId}/add-participants`, data);
  }

  inviteGroupParticipant(cohortId: string, track: string, data: any) {
    return this.client.put(
      `/cohort/${cohortId}/upload-participants-csv?track=${track}`,
      {
        file: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
}

export default Participant;