import axios from "axios";
import jwt from 'jsonwebtoken';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });


export const refreshAccessToken = async (refreshToken) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_SEREVER_URL}/auth/refresh`, {
        refreshToken,
      });
  
      if (response.status === 200) {
        const { accessToken } = response.data.data;
  
        return accessToken;
      } else {

        throw new Error("토큰 갱신 실패");
      }
    } catch (error) {
      throw new Error("토큰 갱신 실패");
    }
  };

  

  export const isTokenExpired = (token) => {
    if (!token) {
      return true; // 토큰이 없으면 만료됨
    }
  
    try {
      const decodedToken = jwt.decode(token);
  
      if (!decodedToken || !decodedToken.exp) {
        return true; 
      }
  
      // 현재 시간과 비교하여 토큰이 만료되었는지 확인함
      return Date.now() >= decodedToken.exp * 1000;
    } catch (error) {
     console.log("토큰 오류");
      return true; 
    }
  };
  