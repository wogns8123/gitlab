import React from "react";
import * as Styled from "./index.styles";
import { IconSend } from "../../../../common/icons";

const GPTfunction = () => {
  return (
    <Styled.BodyContainer>
      <Styled.LogoName>CustomGPT</Styled.LogoName>
      <Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>
      <Styled.InputBox>
        <Styled.Input placeholder="Send a message" />
        <IconSend height="1rem" width="1rem" fill="#4C49ED" />
      </Styled.InputBox>
    </Styled.BodyContainer>
  );
};

export default GPTfunction;
