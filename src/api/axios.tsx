import axios from "axios"

const BASE_URL = process.env.REACT_APP_COHUT_API_URL

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    // withCredentials: true
})

axiosPrivate.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("auth-token")
        if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export default axiosPublic;