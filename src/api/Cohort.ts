class Cohort {
  client;

  constructor(client: any) {
    this.client = client;
  }

  createCohort(payload: any) {
    return this.client.post("/cohort", payload);
  }
}

export default Cohort;
