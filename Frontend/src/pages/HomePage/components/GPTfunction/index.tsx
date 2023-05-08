import React, { KeyboardEvent, ChangeEvent, useRef, useEffect } from "react";
import * as Styled from "./index.styles";
import { IconChat, IconSend } from "../../../../common/icons";
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

    console.log(conversation);
    dispatch(saveMessage(conversation));

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
      conversation = {
        who: "GTP",
        content: "아직 API가 연결되지 않았습니다.",
      };
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
      {messagesFromRedux.length === 0 ? (
        <>
          <Styled.LogoName>CustomGPT</Styled.LogoName>
          <Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>
        </>
      ) : (
        <Styled.Content>
          {messagesFromRedux.map(
            (message: { who: string; content: string }, i: number) =>
              message.who === "user" ? (
                <Styled.UserText key={i}>{message.content}</Styled.UserText>
              ) : (
                <Styled.GPTContainer key={i}>
                  <Styled.NameContainer>
                    <Styled.IconBox>
                      <IconChat height="1.5rem" width="1.5rem" fill="white" />
                    </Styled.IconBox>
                    <Styled.Logo>CustomGPT</Styled.Logo>
                  </Styled.NameContainer>
                  <Styled.GPTText>{message.content}</Styled.GPTText>
                </Styled.GPTContainer>
              )
          )}
        </Styled.Content>
      )}
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
