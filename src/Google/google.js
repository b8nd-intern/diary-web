import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GOOGLELOGIN = () => {
    const clientId = "941387610926-u2ehjvkpdvhpfegenend99abaeatuq7q.apps.googleusercontent.com";
    const SEREVERURL = "http://15.164.163.4/auth/login/google"
    const navigate = useNavigate();

    const onSuccess = async (response) => {
        console.log(response); 

        try {
            const headers = {
                'id_token': `${response.credential}`
            };

            await axios.post(SEREVERURL, null, {
                headers: headers
            });
            
            console.log('서버로 데이터 전송 성공');
            navigate('/name_login');
        } catch (error) {
            console.error('서버 오류:', error);
        }
    }

    return (
        <div className='google_button'>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={() => {
                        console.log('실패');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default GOOGLELOGIN;
