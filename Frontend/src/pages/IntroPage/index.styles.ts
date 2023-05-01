import styled from "styled-components";
import background from "assets/images/background.jpg";
import titleImg from "assets/images/titleImg.jpg";

export const BodyContainer = styled.div`
  background: url(${background});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 7rem;
  margin: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 12rem;
  color: transparent;
  background-image: url(${titleImg});
  -webkit-background-clip: text;
  margin: 0;
`;

export const SubTitle = styled.h3`
  font-size: 3rem;
  width: 50rem;
  margin: 0;
  color: white;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 14rem;
`;
