import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.CancelToken = axios.CancelToken;
axiosInstance.isCancel = axios.isCancel;

export const httpClientNoToken ={
    postNOToken: (urlEndpoint, data) => axiosInstance.post(urlEndpoint, data), 
}