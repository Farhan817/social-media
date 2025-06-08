import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const language = localStorage.getItem('language') || 'en';
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    config.headers['Accept-Language'] = language;
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axiosInstance.post('/auth/refresh-token', { token: refreshToken });
        localStorage.setItem('accessToken', data.accessToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle token refresh error (e.g., redirect to login)
      }
    }
    return Promise.reject(error);
  }
);


export const get = <T = any>(
  url: string,
  params:any,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url,params);
};

export const post = <T = any>(
  url: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, data);
};

export default axiosInstance ;