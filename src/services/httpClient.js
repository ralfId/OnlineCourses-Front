import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/api";

axios.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token") || "";

    if (token != null) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    }
    
  },
  (error) => {
    return new Promise.reject(error);
  }
);

export const HttpClient = {
  get: (urlEndpoint) => axios.get(urlEndpoint),
  post: (urlEndpoint, bodyData) => axios.post(urlEndpoint, bodyData),
  put: (urlEndpoint, bodyData) => axios.put(urlEndpoint, bodyData),
  delete: (urlEndpoint) => axios.delete(urlEndpoint),
};
