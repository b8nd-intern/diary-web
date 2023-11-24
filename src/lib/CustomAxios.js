import axios from "axios";
import Cookies from "js-cookie";
import CONFIG from "../config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.serverUrl}`, 
  headers: {
    Authorization: `Bearer ${Cookies.get("accessToken")}`,
  },
});

const errorInterceptor = async (error) => {
  const refreshToken = Cookies.get("refreshToken");

  if (
    error.response &&
    error.response.status === 401 &&
    !error.config._isRetry
  ) {
    const originalRequest = error.config;
    originalRequest._isRetry = true;

    try {
      const { data } = await axios.post(`${CONFIG.serverUrl}/auth/refresh`, {
        refreshToken,
      });

      Cookies.set("accessToken", data.data.accessToken, { expires: 7 });
      customAxios.defaults.headers.Authorization = `Bearer ${data.data.accessToken}`;
      originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return axios(originalRequest);
    } catch (refreshError) {
      throw new Error(`Token error: ${refreshError.message}`);
    }
  }

  throw new Error(`error${error.response.status}`);
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);
export default customAxios;
