class User {
  client;

  constructor(client: any) {
    this.client = client;
  }

  fetch() {
    this.client.get("/user");
  }

  update(payload: any) {
    this.client.put("/user", payload);
  }

  deactivate() {
    this.client.get("/user");
  }
}

export default User;
