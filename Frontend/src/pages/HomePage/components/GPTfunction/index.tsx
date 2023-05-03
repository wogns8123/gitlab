import React, { KeyboardEvent, ChangeEvent } from "react";
import * as Styled from "./index.styles";
import { IconSend } from "../../../../common/icons";
import { Axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "_actions/message_actions";

const GPTfunction = () => {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state: any) => state.messages);
  const textQuery = async (text: string) => {
    let conversation = {
      who: "user",
      content: text,
    };

    dispatch(saveMessage(conversation));
    console.log(conversation);

    const textQueryVariables = {
      text,
    };

    try {
      // 이부분 수정해야함
      // const res = await Axios.post("", textQueryVariables);
      // const content = res.data[0];
      // conversation = {
      //   who: "GTP",
      //   content: content,
      // };

      dispatch(saveMessage(conversation));
    } catch (error) {
      conversation = {
        who: "GTP",
        content: "에러가 발생했습니다",
      };

      dispatch(saveMessage(conversation));
    }
  };

  // 질문할때 빈칸이면 alert 띄우기
  const keyPressHandler = (
    e: KeyboardEvent<HTMLElement> & ChangeEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("입력하세요");
      }
      textQuery(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <Styled.BodyContainer>
      <Styled.LogoName>CustomGPT</Styled.LogoName>
      <Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>
      <Styled.InputBox>
        <Styled.Input
          placeholder="Send a message"
          onKeyPress={keyPressHandler}
        />
        <IconSend height="1rem" width="1rem" fill="#4C49ED" />
      </Styled.InputBox>
    </Styled.BodyContainer>
  );
};

export default GPTfunction;
