import styled from "styled-components";

export const BodyContainer = styled.div`
  background-color: white;
  height: 40rem;
  width: 70rem;
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
  //background-color: gray;
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 45rem;
  height: 2rem;
  border-radius: 6px;
  box-shadow: 1px 1px 5px 3px #e5e5e5;
  position: fixed;
  top: 36rem;
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
