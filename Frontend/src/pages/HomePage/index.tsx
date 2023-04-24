import React from 'react';
import * as Styled from "./index.styles";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <Styled.BodyContainer>
      <Sidebar/>
    </Styled.BodyContainer>
  );
};

export default HomePage;