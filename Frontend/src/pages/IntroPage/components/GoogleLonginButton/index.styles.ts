import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 5px;
  width: 14rem;
  height: 2.5rem;
  &:hover{
    cursor:pointer;
  }
`;

export const Text = styled.h5`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0 0.5rem;
`;