import React, { KeyboardEvent, ChangeEvent } from "react";
import * as Styled from "./index.styles";
import {IconChat, IconSend} from "../../../../common/icons";
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
      // dispatch(saveMessage(conversation));

    } catch (error) {
      conversation = {
        who: "GTP",
        content: "에러가 발생했습니다",
      }
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
      {/*<Styled.LogoName>CustomGPT</Styled.LogoName>*/}
      {/*<Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>*/}
      <Styled.Content>
        <Styled.UserText>
          프로젝트 주제를 알려줘
        </Styled.UserText>
        <Styled.GPTContainer>
          <Styled.NameContainer>
            <Styled.IconBox>
              <IconChat height='1.5rem' width='1.5rem' fill='white'/>
            </Styled.IconBox>
            <Styled.Logo>CustomGPT</Styled.Logo>
          </Styled.NameContainer>
          <Styled.GPTText>
            프로젝트 주제는 여러 가지가 있을 수 있지만, 몇 가지 아이디어를 제안해 드릴게요!
            1. 인공지능 기반 자동 번역 프로그램: 최신 인공지능 기술을 이용하여, 다양한 언어 간 번역이 가능한 프로그램을 개발하는 것입니다. 이 프로젝트는 다국어 커뮤니케이션을 위한 유용한 도구가 될 수 있습니다.
            2. 음성인식 기반 쇼핑 어플리케이션: 음성인식 기술을 이용하여, 사용자가 원하는 제품을 말하면 해당 제품을 추천해주는 어플리케이션을 만드는 것입니다. 이 프로젝트는 쇼핑을 더욱 간편하게 만들어 줄 수 있습니다.
            3. 스마트 홈 자동화 시스템: 인터넷을 통해 연결된 스마트 홈 기기들을 제어하는 시스템을 만드는 것입니다. 이 프로젝트는 스마트 시티에 필수적인 기술 중 하나입니다.
          </Styled.GPTText>
        </Styled.GPTContainer>
        <Styled.UserText>
          프로젝트 주제를 알려줘
        </Styled.UserText>
        <Styled.GPTContainer>
          <Styled.NameContainer>
            <Styled.IconBox>
              <IconChat height='1.5rem' width='1.5rem' fill='white'/>
            </Styled.IconBox>
            <Styled.Logo>CustomGPT</Styled.Logo>
          </Styled.NameContainer>
          <Styled.GPTText>
            프로젝트 주제는 여러 가지가 있을 수 있지만, 몇 가지 아이디어를 제안해 드릴게요!
            1. 인공지능 기반 자동 번역 프로그램: 최신 인공지능 기술을 이용하여, 다양한 언어 간 번역이 가능한 프로그램을 개발하는 것입니다. 이 프로젝트는 다국어 커뮤니케이션을 위한 유용한 도구가 될 수 있습니다.
            2. 음성인식 기반 쇼핑 어플리케이션: 음성인식 기술을 이용하여, 사용자가 원하는 제품을 말하면 해당 제품을 추천해주는 어플리케이션을 만드는 것입니다. 이 프로젝트는 쇼핑을 더욱 간편하게 만들어 줄 수 있습니다.
            3. 스마트 홈 자동화 시스템: 인터넷을 통해 연결된 스마트 홈 기기들을 제어하는 시스템을 만드는 것입니다. 이 프로젝트는 스마트 시티에 필수적인 기술 중 하나입니다.
          </Styled.GPTText>
        </Styled.GPTContainer>
      </Styled.Content>
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
