import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CONFIG from "../../config.json";
import { showToast } from "../Swal/Toast";

const GOOGLELOGIN = () => {
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    try {
      const headers = {
        id_token: `${response.credential}`,
      };

      response = await axios.post(
        `${CONFIG.serverUrl}/auth/login/google`,
        null,
        {
          headers,
        }
      );

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data.data;
        localStorage.setItem("accessToken",accessToken);
        Cookies.set("refreshToken", refreshToken);
      }

      if (response.data.data.isFirst === false) {
        navigate("/mainhome");
      } else {
        navigate("/name_login");
      }
    } catch (error) {
      showToast("error", "서버오류");
    }
  };

  return (
    <div className="google_button">
      <GoogleOAuthProvider clientId={CONFIG.CLIENTID}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => showToast("error", "실패")}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GOOGLELOGIN;
