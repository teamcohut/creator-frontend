class User {
  client;

  constructor(client: any) {
    this.client = client;
  }

  fetch() {
    return this.client.get("/user");
  }

  update(payload: any) {
    return this.client.put("/user", payload);
  }

  deactivate() {
    return this.client.delete("/user/deactivate");
  }
}

export default User;
