import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CLIENT_KEY from "constants/keys";
import { default as axios } from "axios";
import { useNavigate } from "react-router-dom";
import HomePage from "../../../HomePage";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const clientId = CLIENT_KEY.GOOGLE;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
            // navigate("/home");
            // axios.get("http://localhost:8080/oauth2/authorization/google");
          }}
          onError={() => {
            console.log("로그인 실  패");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
