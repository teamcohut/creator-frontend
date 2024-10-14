import axios from "axios"

const BASE_URL = process.env.COHUT_API_URL

const axiosPublic = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {"Content-Type": "application/json"},
    withCredentials: true
})

axiosPublic.defaults.maxRedirects = 0;
axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [301, 302].includes(error.response.status)) {
      const redirectUrl = error.response.headers.location;
      return axiosPublic.get(redirectUrl);
    }
    return Promise.reject(error);
  }
);

export default axiosPublic;