class Cohort {
  client;

  constructor(client: any) {
    this.client = client;
  }

  createCohort(payload: any) {
    return this.client.post("/cohort", payload);
  }

  updateCohort(id: string, payload: any) {
    return this.client.put(`/cohort/${id}`, payload);
  }
}

export default Cohort;
