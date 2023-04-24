import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 0 26px 26px 0;
  height: 95.5vh;
  width: 16rem;
  padding: 1rem;
`;

export const LogoBox = styled.h1`
  margin: 0.5rem;
`;

export const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  hr {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SubjectContainer = styled.div`
  //background-color: gray;
  flex: 1;
`;

export const SubjectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.h4`
  width: 15rem;
  padding: 0 0 0 0.5rem;
`;

export const MenuContainer = styled.div`
  background-color: aqua;
  width: 16rem;
  height: 10rem;
`;

export const LogoutBox = styled.div`
  background-color: blueviolet;
  width: 16rem;
  height: 3rem;
`;
