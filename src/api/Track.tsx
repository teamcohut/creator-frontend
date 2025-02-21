class Track {
  client;

  constructor(client: any) {
    this.client = client;
  }

  createTrack(data: FormData) {
    return this.client.post("/track", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default Track;
