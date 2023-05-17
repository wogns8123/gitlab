import React from "react";
import * as Styled from "./index.styles";
import { IconGoogle } from "../../../../common/icons";

const GoogleLoginButton2 = () => {
  const onClick = () => {
    // window.location.href = "http://localhost:8080/api/oauth2/authorization/google";
    window.location.href =
      "http://k8e102.p.ssafy.io:8080/api/oauth2/authorization/google";
  };

  return (
    <>
      <Styled.Button onClick={onClick}>
        <IconGoogle height="1.2rem" width="1.2rem" />
        <Styled.Text>Google 계정으로 시작하기</Styled.Text>
      </Styled.Button>
    </>
  );
};

export default GoogleLoginButton2;
