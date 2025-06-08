import axios, {AxiosResponse } from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('user');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const get = <T = any>(
  url: string,
  params:any,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url,{params});
};

export const post = <T = any>(
  url: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, data);
};

export default axiosInstance ;