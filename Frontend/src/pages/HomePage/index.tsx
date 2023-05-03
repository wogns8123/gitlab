import React from "react";
import * as Styled from "./index.styles";
import Sidebar from "./components/Sidebar";
import GPTfunction from "./components/GPTfunction";

const HomePage = () => {
  const searchParams = new URLSearchParams(window.location.search)
  for (const param of searchParams) {
    console.log(param)
  }


  return (
    <Styled.BodyContainer>
      <Sidebar />
      <GPTfunction />
    </Styled.BodyContainer>
  );
};

export default HomePage;
