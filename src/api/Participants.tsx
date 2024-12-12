class Participant {
  client;

  constructor(client: any) {
    this.client = client;
  }

  getParticipants(cohortId: string) {
    return this.client.get(`/cohort/get-participants/${cohortId}`);
  }

  inviteIndividualParticipant(cohortId: string, data: any) {
    return this.client.post(`/cohort/${cohortId}/add-participants`, data);
  }

}

export default Participant;