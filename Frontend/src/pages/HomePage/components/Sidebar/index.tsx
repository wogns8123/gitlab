import React, { useEffect, useState } from "react";
import * as Styled from "./index.styles";
import {
  IconArrow,
  IconConversation,
  IconHome,
  IconTrashCan,
} from "common/icons";
import axios from "axios";
import URLS from "constants/url";
import localstorage from "constants/localstorage";
import { useDispatch } from "react-redux";
import { saveId } from "../../../../_actions/id_actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [titles, setTitles] = useState([]);

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
      });
  }, [localstorage.accessToken]);

  const onClickTitle = (id: number) => {
    dispatch(saveId(id));
  };

  return (
    <Styled.SidebarContainer>
      <Styled.LogoBox>CustomGPT</Styled.LogoBox>
      <Styled.SidebarBox>
        <Styled.SubjectContainer>
          {titles.map((title: { title: string; title_id: number }) => (
            <Styled.SubjectBox key={title.title_id}>
              <Styled.SubjectContentBox
                onClick={() => onClickTitle(title.title_id)}
              >
                <IconConversation height="20px" width="20px" />
                <Styled.Content>{title.title}</Styled.Content>
              </Styled.SubjectContentBox>
              <IconTrashCan height="18px" width="18px" />
            </Styled.SubjectBox>
          ))}
        </Styled.SubjectContainer>
        <hr />
        <Styled.MenuContainer>
          <Styled.HomeContainer>
            <Styled.HomeBox>
              <IconHome height="1.5rem" width="1.5rem" fill="#4C49ED" />
              <Styled.HomeName>HOME</Styled.HomeName>
            </Styled.HomeBox>
          </Styled.HomeContainer>
        </Styled.MenuContainer>
        <Styled.LogoutContainer>
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
