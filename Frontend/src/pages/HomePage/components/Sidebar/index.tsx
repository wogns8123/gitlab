import React from "react";
import * as Styled from "./index.styles";
import { IconConversation, IconTrashCan } from "common/icons";

const Sidebar = () => {
  return (
    <Styled.SidebarContainer>
      <Styled.LogoBox>맞G</Styled.LogoBox>
      <Styled.SidebarBox>
        <Styled.SubjectContainer>
          <Styled.SubjectBox>
            <IconConversation height="20px" width="20px" />
            <Styled.Content>주제가 적혀있습니다.</Styled.Content>
            <IconTrashCan height="18px" width="18px" />
          </Styled.SubjectBox>
        </Styled.SubjectContainer>
        <hr />
        <Styled.MenuContainer />
        <Styled.LogoutBox />
      </Styled.SidebarBox>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
