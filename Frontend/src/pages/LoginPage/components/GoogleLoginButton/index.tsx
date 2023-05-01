import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const clientId =
    "638253521394-rhu7e0oal5g6a0l2slj2udrfc9jr4emh.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
          onError={() => {
            console.log("로그인 실패");
          }}
          text={"signin_with"}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
