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
  width: 100%;
  height: 25rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

export const SubjectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.h4`
  width: 15rem;
  padding-left: 0.5rem;
  margin: 1rem 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 10rem;
`;

export const HomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const HomeName = styled.h3`
  color: #4c49ed;
  margin-left: 1rem;
`;
export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: blueviolet;
  width: 16rem;
  height: 3rem;
`;
export const LogoutName = styled.h4`
  margin-left: 1rem;
`;
