import React, {
  KeyboardEvent,
  ChangeEvent,
  useRef,
  useEffect,
  useState,
} from "react";
import * as Styled from "./index.styles";
import { IconChat, IconSend } from "../../../../common/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "_actions/message_actions";
import URLS from "../../../../constants/url";
import localstorage from "../../../../constants/localstorage";

const GPTfunction = () => {
  const dispatch = useDispatch();
  const idFromRedux = useSelector((state: any) => state.id);
  const [chat, setChat] = useState([]);
  const messagesFromRedux = useSelector((state: any) => state.messages);
  const textQuery = async (text: string) => {
    if (idFromRedux) {
      const textQueryVariables = {
        chat: text,
        titleId: idFromRedux,
      };
      const res = await axios.post(`${URLS.API}/api/chat`, textQueryVariables, {
        headers: {
          Authorization: `Bearer ${localstorage.accessToken}`,
        },
      });
      console.log(res);
    } else {
      const textQueryVariables = {
        chat: text,
      };
      const res = await axios.post(`${URLS.API}/api/chat`, textQueryVariables, {
        headers: {
          Authorization: `Bearer ${localstorage.accessToken}`,
        },
      });
      console.log(res);
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

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("refresh_token");

    console.log(idFromRedux, "idFromRedux");
    if (idFromRedux) {
      axios
        .get(`${URLS.API}/api/chat/${idFromRedux}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          // console.log(chat.length, "ㅁㄴㅇㄹ");
          if (res) {
            console.log(res.data, "ㅁㄴㅇㄹ");
            setChat(res.data);
          }
        });
    }
  }, [idFromRedux]);

  return (
    <Styled.BodyContainer>
      {chat.length === 0 ? (
        <>
          <Styled.LogoName>CustomGPT</Styled.LogoName>
          <Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>
        </>
      ) : (
        <Styled.Content>
          {chat.map(
            (
              message: { request_id: number; answer: string; chat: string },
              i: number
            ) => (
              <>
                <Styled.UserText key={i}>{message.chat}</Styled.UserText>
                <Styled.GPTContainer key={i}>
                  <Styled.NameContainer>
                    <Styled.IconBox>
                      <IconChat height="1.5rem" width="1.5rem" fill="white" />
                    </Styled.IconBox>
                    <Styled.Logo>CustomGPT</Styled.Logo>
                  </Styled.NameContainer>
                  <Styled.GPTText>{message.answer}</Styled.GPTText>
                </Styled.GPTContainer>
              </>
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
