import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import {useCookies} from 'react-cookie'

const GOOGLELOGIN = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const SEREVERURL = process.env.REACT_APP_SEREVER_URL;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const onSuccess = async (response) => {
    console.log(response);
    let obj = jwtDecode(response.credential);
    let data = JSON.stringify(obj);
    console.log(data);
    
    try{
        const headers={
            id_token: `${response.credential}`,
        };
        response = await axios.post(SEREVERURL,{
            headers: headers,
        });
        if (response.status === 200) {
            console.log("hello");
            navigate("/name_login");
            console.log(response.data);
    
            const { accessToken, refreshToken } = response.data.data;
            setCookie("Userdata", data);
            setCookie("accessToken", accessToken);
            setCookie("refreshToken", refreshToken);
            
          }
        
    }catch(error){
        console.log("error");
    }

  }
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
            console.log("실패");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GOOGLELOGIN;
