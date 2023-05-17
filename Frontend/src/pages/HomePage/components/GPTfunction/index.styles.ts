import styled from "styled-components";

export const BodyContainer = styled.div`
  background-color: white;
  //height: 40rem;
  //width: 71rem;
  height: 87vh;
  width: 74vw;
  margin-left: 4.5rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoName = styled.h1`
  font-size: 6rem;
`;

export const SubName = styled.h2`
  position: relative;
  bottom: 4rem;
`;

export const InputBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 45rem;
  height: 2rem;
  border-radius: 6px;
  box-shadow: 1px 1px 5px 3px #e5e5e5;
  position: fixed;
  top: 37rem;
`;

export const Input = styled.input`
  width: 43rem;
  height: 1.8rem;
  border: none;
  border-radius: 6px;
  text-indent: 0.7rem;
  font-size: 15px;
  &:focus {
    outline: none !important;
  }
`;

export const Content = styled.div`
  //background-color: gray;
  height: 34.5rem;
  width: 65rem;
  margin-top: 2rem;
  overflow: auto;
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

export const GPTContainer = styled.div`
  padding-bottom: 3rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4c49ed;
  height: 2rem;
  width: 2rem;
  border-radius: 6px;
`;

export const Logo = styled.h4`
  margin: 0 0.5rem;
`;

export const Text = styled.div`
  height: auto;
  width: 39.5rem;
  padding: 1rem;
  border-radius: 10px;
  line-height: 2em;
`;
export const UserTextContainer = styled.div`
  padding-bottom: 3rem;
`;

export const UserText = styled(Text)`
  background-color: #4c49ed;
  color: white;
  position: relative;
  left: 23rem;
`;

export const GPTText = styled(Text)`
  background-color: #e4e3ff;
`;

export const LottieBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 68%;
  position: fixed;
  top: 0rem;
`;
