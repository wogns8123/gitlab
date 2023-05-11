import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CLIENT_KEY from "constants/keys";
import {useNavigate} from "react-router-dom";

const GoogleLoginButton = () => {
  const clientId = CLIENT_KEY.GOOGLE;
  const navigate = useNavigate()

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            // console.log(res);
            window.location.href = "http://localhost:8080/api/oauth2/authorization/google"
            navigate('/home')
          }}
          onError={() => {
            console.log("로그인 실패");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
