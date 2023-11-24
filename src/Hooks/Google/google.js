import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { refreshAccessToken, isTokenExpired } from "../../lib/Axios/axiosrfresh";

const GOOGLELOGIN = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const SEREVERURL = process.env.REACT_APP_SEREVER_URL;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
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
  const onSuccess = async (response) => {
    try {
      const headers = {
        id_token: `${response.credential}`,
      };

      response = await axios.post(`${SEREVERURL}/auth/login/google`, null, {
        headers: headers,
      });

      if (response.data.data.isFirst == false) {
        navigate("/mainhome");
      } else {
        if (response.status === 200) {
          let newAccessToken = cookies.accessToken;
          if (isTokenExpired(newAccessToken)) {
            newAccessToken = await refreshAccessToken(cookies.refreshToken);

            response = await axios.post(
              `${SEREVERURL}/auth/login/google`,
              null,
              {
                headers: {
                  ...headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              }
            );
          }

          navigate("/name_login");
          const { accessToken, refreshToken } = response.data.data;
          setCookie("accessToken", accessToken);
          setCookie("refreshToken", refreshToken);
        }
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "서버 오류",
      });
    }
  };

  return (
    <div className="google_button">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => {
            Toast.fire({
              icon: "error",
              title: "실패",
            });
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GOOGLELOGIN;
