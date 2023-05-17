import React, { useEffect, useState } from "react";
import * as Styled from "./index.styles";
import {
  IconArrow,
  IconConversation,
  IconHome,
  IconTrashCan,
  IconUser,
} from "common/icons";
import axios from "axios";
import URLS from "constants/url";
import { useDispatch, useSelector } from "react-redux";
import { saveId } from "../../../../_actions/id_actions";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);
  const [nickname, setNickname] = useState("");
  const idFromRedux = useSelector((state: any) => state.id);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("access_token");

    axios
      .get(`${URLS.API}/api/chat`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTitles(res.data.titles);
        setNickname(res.data.nickname);
      })
      .catch(() => {
        navigate("/");
      });
  }, [idFromRedux]);

  const onClickTitle = (id: number) => {
    dispatch(saveId(id));
  };

  const onClickDelete = (id: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("access_token");

    axios
      .delete(`${URLS.API}/api/chat/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        navigate(0);
      });
  };

  const onClickHome = () => {
    navigate(0);
  };

  const onClickLogout = () => {
    window.localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <Styled.SidebarContainer>
      <Styled.LogoBox>CustomGPT</Styled.LogoBox>
      <Styled.SidebarBox>
        <Styled.SubjectContainer>
          {titles
            .slice(0)
            .reverse()
            .map((title: { title: string; title_id: number }) => (
              <Styled.SubjectBox key={title.title_id}>
                <Styled.SubjectContentBox
                  onClick={() => onClickTitle(title.title_id)}
                >
                  <IconConversation height="20px" width="20px" />
                  <Styled.Content>{title.title}</Styled.Content>
                </Styled.SubjectContentBox>
                <Styled.IconBox onClick={() => onClickDelete(title.title_id)}>
                  <IconTrashCan height="18px" width="18px" />
                </Styled.IconBox>
              </Styled.SubjectBox>
            ))}
        </Styled.SubjectContainer>
        <hr />
        <Styled.MenuContainer>
          <Styled.HomeContainer onClick={onClickHome}>
            <Styled.HomeBox>
              <IconHome height="1.5rem" width="1.5rem" fill="#4C49ED" />
              <Styled.HomeName>New chat</Styled.HomeName>
            </Styled.HomeBox>
          </Styled.HomeContainer>
          <Styled.NicknameContainer>
            <IconUser height="1.2rem" width="1.2rem" />
            <Styled.NicknameBox>{nickname}</Styled.NicknameBox>
          </Styled.NicknameContainer>
        </Styled.MenuContainer>
        <Styled.LogoutContainer onClick={onClickLogout}>
          <Styled.LogoutBox>
            <IconArrow
              height="1rem"
              width="1rem"
              fill="#CCCBD8"
              className="Back"
            />
            <Styled.LogoutName>Log Out</Styled.LogoutName>
          </Styled.LogoutBox>
        </Styled.LogoutContainer>
      </Styled.SidebarBox>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
