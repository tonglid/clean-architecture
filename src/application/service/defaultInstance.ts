import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
const baseURL = import.meta.env.BASE_URL || '';
const baseInstance = axios.create({
  baseURL: baseURL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});
baseInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.url = `http://localhost:8888${config.url}`;
    // config.url = `http://103.137.90.2:8888${config.url}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// mockUpData(baseInstance);
export const axiosMockAdapterInstance = new AxiosMockAdapter(baseInstance, {
  delayResponse: 1000,
  onNoMatch: 'passthrough',
});
export default baseInstance;
