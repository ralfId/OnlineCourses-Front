import axios from "axios";

axios.defaults.baseURL = 'https://localhost:5001/api';

export const requestType = {
    get: (urlEndpoint) => axios.get(urlEndpoint),
    post: (urlEndpoint, bodyData) => axios.post(urlEndpoint, bodyData),
    put: (urlEndpoint, bodyData) => axios.put(urlEndpoint, bodyDat),
    delete: (urlEndpoint) => axios.delete(urlEndpoint)
};
