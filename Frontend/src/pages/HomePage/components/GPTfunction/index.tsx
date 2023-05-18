import React, {
  KeyboardEvent,
  ChangeEvent,
  useEffect,
  useState,
  useRef,
} from "react";
import * as Styled from "./index.styles";
import { IconChat, IconSend } from "common/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import URLS from "constants/url";
import { saveId } from "_actions/id_actions";
import Lottie from "react-lottie";
import animationData from "assets/lotties/loading.json";

const GPTfunction = () => {
  const [tempText, setTempText] = useState("");
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const idFromRedux = useSelector((state: any) => state.id);
  const [chat, setChat] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const textQuery = async (text: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("refresh_token");
    if (idFromRedux) {
      const textQueryVariables = {
        chat: text,
        titleId: idFromRedux,
      };
      await axios.post(`${URLS.API}/api/chat`, textQueryVariables, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } else {
      const textQueryVariables = {
        chat: text,
      };
      await axios
        .post(`${URLS.API}/api/chat`, textQueryVariables, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          dispatch(saveId(res.data.titleId));
        });
    }
    setRefresh(!refresh);
  };

  // 질문할때 빈칸이면 alert 띄우기
  const keyPressHandler = (
    e: KeyboardEvent<HTMLElement> & ChangeEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("입력하세요");
      }
      setFlag(true);
      setTempText(e.target.value);
      textQuery(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("refresh_token");

    if (idFromRedux) {
      axios
        .get(`${URLS.API}/api/chat/${idFromRedux}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setFlag(false);
          setTempText("");
          setChat(res.data);
        });
    }
  }, [idFromRedux, refresh]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [chat, tempText]);

  return (
    <Styled.BodyContainer>
      {chat.length === 0 && !tempText ? (
        <>
          <Styled.LogoName>CustomGPT</Styled.LogoName>
          <Styled.SubName>우리들의 개발지식 멘토</Styled.SubName>
        </>
      ) : (
        <Styled.Content>
          {chat.map(
            (message: { request_id: number; answer: string; chat: string }) => (
              <>
                <Styled.UserTextContainer key={message.request_id}>
                  <Styled.UserText>{message.chat}</Styled.UserText>
                </Styled.UserTextContainer>
                <Styled.GPTContainer key={message.answer} ref={scrollRef}>
                  <Styled.NameContainer>
                    <Styled.IconBox>
                      <IconChat height="1.5rem" width="1.5rem" fill="white" />
                    </Styled.IconBox>
                    <Styled.Logo>CustomGPT</Styled.Logo>
                  </Styled.NameContainer>
                  <Styled.GPTText>
                    {message.answer.split("\n").map((text) => {
                      return (
                        <>
                          {text}
                          <br />
                        </>
                      );
                    })}
                  </Styled.GPTText>
                </Styled.GPTContainer>
              </>
            )
          )}
          {flag ? (
            <>
              <Styled.UserTextContainer ref={scrollRef}>
                <Styled.UserText>{tempText}</Styled.UserText>
              </Styled.UserTextContainer>
              <Styled.LottieBox>
                <Lottie options={defaultOptions} height={200} width={200} />
              </Styled.LottieBox>
            </>
          ) : (
            void 0
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
