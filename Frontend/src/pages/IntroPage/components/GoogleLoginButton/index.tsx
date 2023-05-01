import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CLIENT_KEY from "constants/keys";
import { default as axios } from "axios";
import { Link } from "react-router-dom";

const GoogleLoginButton = () => {
  const clientId = CLIENT_KEY.GOOGLE;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
            axios.get("http://localhost:8080/oauth2/authorization/google");
            // <Link to={"/home"} />;
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
