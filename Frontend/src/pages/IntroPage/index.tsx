import React from "react";
import * as Styled from "./index.styles";
import GoogleLoginButton from "./components/GoogleLonginButton";

const IntroPage = () => {
  return (
    <Styled.BodyContainer>
      <Styled.TitleContainer>
        <Styled.SubTitle>싸피인을 위한</Styled.SubTitle>
        <Styled.Title>CustomGPT</Styled.Title>
      </Styled.TitleContainer>
      <Styled.LoginBox>
        <GoogleLoginButton />
      </Styled.LoginBox>
    </Styled.BodyContainer>
  );
};

export default IntroPage;
