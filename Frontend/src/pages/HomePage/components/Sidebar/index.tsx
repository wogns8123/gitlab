import React from "react";
import * as Styled from "./index.styles";
import {
  IconArrow,
  IconConversation,
  IconHome,
  IconTrashCan,
} from "common/icons";

const Sidebar = () => {
  return (
    <Styled.SidebarContainer>
      <Styled.LogoBox>CustomGPT</Styled.LogoBox>
      <Styled.SidebarBox>
        <Styled.SubjectContainer>
          {Array(10)
            .fill(1)
            .map(() => (
              <Styled.SubjectBox>
                <IconConversation height="20px" width="20px" />
                <Styled.Content>
                  주제가 적혀있습니다. 주제가 적혀있습니다
                </Styled.Content>
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
