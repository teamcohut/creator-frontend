class Auth {
  client;

  constructor(client) {
    this.client = client;
  }

  login(payload) {
    return this.client.post("/auth/login", payload);
  }

  signup(payload) {
    return this.client.post("/auth/signup", payload);
  }
}

export default Auth;
