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

  /**
   * @param programId 
   * @param participantId 
   * @returns 
   */
  removeParticipant(programId: string, participantId: string) {
    return this.client.delete(`/program/remove-participant/${programId}/${participantId}`);
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

  sendParticipantMail(payload: any) {
    return this.client.post('/participant/send-email', payload);
  }
}

export default Participant;
