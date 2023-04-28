import React from "react";
import * as Styled from "./index.styles";
import GoogleLoginButton from "../IntroPage/components/GoogleLoginButton";

const LoginPage = () => {
  return (
    <Styled.BodyContainer>
      <Styled.LoginContainer>
        <Styled.LoginName>Login</Styled.LoginName>
        <GoogleLoginButton />
      </Styled.LoginContainer>
    </Styled.BodyContainer>
  );
};

export default LoginPage;
