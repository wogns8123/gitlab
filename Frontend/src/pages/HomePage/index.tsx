import React from "react";
import * as Styled from "./index.styles";
import Sidebar from "./components/Sidebar";
import GPTfunction from "./components/GPTfunction";

const HomePage = () => {
  return (
    <Styled.BodyContainer>
      <Sidebar />
      <GPTfunction />
    </Styled.BodyContainer>
  );
};

export default HomePage;
