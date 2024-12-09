import axios from "axios";
import Auth from "./Auth";
import Program from "./Program";
import Participant from "./Participants";

const BaseURL = process.env.REACT_APP_COHUT_API_URL;

export const axiosPublic = axios.create({
  baseURL: BaseURL,
});

export const axiosPrivate = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

const api = {
  auth: new Auth(axiosPublic),
  program: new Program(axiosPrivate),
  participant: new Participant(axiosPrivate),
};

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

export default api;
