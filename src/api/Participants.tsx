class Participant {
  client;

  constructor(client: any) {
    this.client = client;
  }

  getParticipants(cohortId: string, page: number) {
    return this.client.get(`/cohort/get-participants/${cohortId}?page=${page}&limit=10`);
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
    return this.client.delete(`/program/${programId}/remove-participant/${participantId}`);
  }

  graduateParticipant(cohortId: string, participantId: Array<string>) {
    return this.client.post(`/cohort/graduate-participants/${cohortId}`, {participantId});
  }

  inviteGroupParticipant(cohortId: string, track: string, data: any, progress?: any) {
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
    return this.client.post('/program/send-email', payload);
  }
}

export default Participant;
