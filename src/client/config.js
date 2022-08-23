import axios from "axios";

const http = axios.create({
  baseURL: "http://sandbox.arabamd.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers["accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
