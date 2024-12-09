import { IProgramDTO } from "../@types/program.interface";

class Program {
  client;

  constructor(client: any) {
    this.client = client;
  }

  createProgram(payload: IProgramDTO) {
    return this.client.post("/program", payload);
  }

  getPrograms() {
    return this.client.get("/program");
  }

  editProgram(id: string, payload: Partial<IProgramDTO>) {
    return this.client.put(`/program/${id}`, payload);
  }
}

export default Program;
