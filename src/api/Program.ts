import { IProgramDTO } from "../@types/program.interface";

class Program {
  client;

  constructor(client: any) {
    this.client = client;
  }

  createProgram(payload: IProgramDTO) {
    return this.client.post("/program", payload);
  }
  updateProgram(id: string, payload: IProgramDTO) {
    return this.client.put(`/program/${id}`, payload);
  }

  uploadProgramImage(data: any) {
    return this.client.post(
      "/upload",
      {
        image: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  getPrograms() {
    return this.client.get("/program");
  }

  editProgram(id: string, payload: Partial<IProgramDTO>) {
    return this.client.put(`/program/${id}`, payload);
  }

  deleteProgram(id: string) {
    return this.client.delete(`/program/${id}`)
  }
}

export default Program;
