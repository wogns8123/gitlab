import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 0 26px 26px 0;
  height: 95.5vh;
  width: 16rem;
  padding: 1rem 0;
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
  width: 87%;
  //height: 26rem;
  height: 59vh;
  overflow: auto;
  padding: 0 1rem;
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #e4e3ff; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white; /*스크롤바 뒷 배경 색상*/
  }
`;

export const SubjectContentBox = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
  }
`;

export const SubjectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.h4`
  width: 11rem;
  padding-left: 0.5rem;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MenuContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  height: 8rem;
  padding: 0 1rem;
`;

export const HomeContainer = styled.div`
  width: 100%;
  background-color: #e4e3ff;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export const HomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 1rem;
`;

export const HomeName = styled.h3`
  color: #4c49ed;
  margin: 0.7rem 0 0.7rem 1rem;
`;
export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 3rem;
  &: hover {
    cursor: pointer;
  }
`;

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 1rem;
`;

export const LogoutName = styled.h4`
  margin-left: 1rem;
  color: #cccbd8;
`;

export const IconBox = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  position: relative;
  right: 1rem;
`;

export const NicknameBox = styled.div`
  margin-left: 0.5rem;
`;
