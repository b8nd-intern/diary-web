import React, {useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import CONFIG from "../../config.json"
import { showToast } from "../Swal/Toast";




const GOOGLELOGIN = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const onSuccess = async (response) => {
    try {
      const headers = {
        id_token: `${response.credential}`,
      };

      response = await axios.post(`${CONFIG.serverUrl}/auth/login/google`, null, {
        headers,
      });
      
      
      if (response.status === 200) {
        
        const { accessToken, refreshToken } = response.data.data;
        console.log(accessToken);
        console.log(refreshToken)
        setCookie("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
      }
      if (response.data.data.isFirst == false) {
        navigate("/mainhome");
      } else {
        navigate("/name_login");
      }
    } catch (error) {
      showToast("error", "서버오류")
    }
  };

  return (
    <div className="google_button">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => showToast("error", "실패")}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GOOGLELOGIN;
