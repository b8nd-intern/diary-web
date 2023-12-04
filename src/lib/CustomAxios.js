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
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  if (accessToken && refreshToken && error.response && error.response.status === 401) {
    const originalRequest = error.config;

    if (!originalRequest._retry) {
      originalRequest._retry = true;

      try {
        
        const { data } = await axios.post(`${CONFIG.serverUrl}/auth/refresh`, {
          refreshToken,
        });        
        localStorage.setItem("accessToken", data.data.accessToken, { expires: 7 });
        customAxios.defaults.headers.Authorization = `Bearer ${data.data.accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
        console.log("ok");

        
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh error:", refreshError);
        
      }
    }
  }

  throw error;
};

// 응답 인터셉터 등록
customAxios.interceptors.response.use(
  (response) => response,
  (error) => errorInterceptor(error)
);

export default customAxios;
