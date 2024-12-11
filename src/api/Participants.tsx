class Participant {
  client;

  constructor(client: any) {
    this.client = client;
  }

  getParticipants(cohortId: string) {
    return this.client.get(`/cohort/get-participants/${cohortId}`);
  }
}

export default Participant;