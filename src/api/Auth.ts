class Auth {
  client;
  secondaryClient;

  constructor(client: any, secondaryClient?: any) {
    this.client = client;
    this.secondaryClient = secondaryClient;
  }

  login(payload: any) {
    return this.client.post("/auth/login", payload);
  }

  signup(payload: any) {
    return this.client.post("/auth/register", payload);
  }

  changePassword(payload: any) {
    return this.secondaryClient.put("/auth/change-password", payload);
  }
}

export default Auth;
