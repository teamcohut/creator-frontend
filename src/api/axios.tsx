import axios from "axios";
import Auth from "./Auth";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:5003/v1",
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:5003/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosPrivate.interceptors.request.use(
  function (config) {
    const user = JSON.parse(localStorage.getItem("user") as any);

    config.headers.authorization = `Bearer ${user.authToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    if (error.response.status === 403) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

const api = {
  auth: new Auth(axiosPublic),
};

export default api;
