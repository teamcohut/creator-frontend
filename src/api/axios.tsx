import axios from "axios";
import Auth from "./Auth";
import Program from "./Program";
import Participant from "./Participants";
import Task from "./Task";
import Session from "./Session";
import Cohort from "./Cohort";
import User from "./User";
import Track from "./Track";

const BaseURL = process.env.REACT_APP_COHUT_API_URL;

export const axiosPublic = axios.create({
  baseURL: BaseURL,
});

export const axiosPrivate = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  auth: new Auth(axiosPublic, axiosPrivate),
  program: new Program(axiosPrivate),
  participant: new Participant(axiosPrivate),
  task: new Task(axiosPrivate),
  session: new Session(axiosPrivate),
  cohort: new Cohort(axiosPrivate),
  user: new User(axiosPrivate),
  track: new Track(axiosPrivate),
};

axiosPrivate.interceptors.request.use(
  function (config) {
    const authToken = JSON.parse(localStorage.getItem("authToken") as any);

    config.headers.authorization = `Bearer ${authToken}`;
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
    if (error?.response?.status === 403) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
