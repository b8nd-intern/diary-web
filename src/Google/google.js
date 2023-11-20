import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

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
      if (response.status === 200) {
        navigate("/name_login");
        const { accessToken, refreshToken } = response.data.data;
        setCookie("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "서버 오류",
      });
    }
  };
  //   const onSuccess = async (response) => {
  //     console.log(response);
  //     try {
  //       debugger;
  //       const headers = {
  //         id_token: `${response.credential}`,
  //       };
  //       response = await axios.post(SEREVERURL, null, {
  //         headers: headers,
  //       });
  //       if (response.status === 200) {
  //         debugger;
  //         navigate("/name_login");
  //         console.log(response.data);

  //         const { accessToken, refreshToken } = response.data.data;

  //         if (accessToken && refreshToken) {
  //           localStorage.setItem("accessToken", accessToken);
  //           localStorage.setItem("refreshToken", refreshToken);
  //         }
  //         console.log(accessToken);
  //         const hasAccess = hasGrantedAllScopesGoogle(
  //           accessToken,
  //           "email",
  //           "profile"
  //         );
  //         console.log(hasAccess);
  //         axios
  //           .get(
  //             `https://www.googleapis.com/oauth2/v2/userinfo`,
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${accessToken}`,
  //                 Accept: "application/json",
  //               },
  //             }
  //           )
  //           .then((res) => {
  //             console.log(res.data);
  //           })
  //           .catch((err) => console.log(err));
  //       }

  //       // if(accessToken !=null){
  //       //     const returnaccess = axios.get("https://www.googleapis.com/auth/userinfo.profile",{
  //       //     headers:{
  //       //         Authorization:`Bearer${accessToken}`,
  //       //     }}
  //       //     )
  //       //     console.log(returnaccess);
  //       // }
  //     } catch (error) {
  //       console.error("서버 오류:", error);
  //     }
  //   };

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
