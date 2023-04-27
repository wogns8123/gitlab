import React from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "./index.styles";

const App = () => {
  return (
    <>
      <Styled.GlobalStyle />
      <Outlet />
    </>
  );
};

export default App;
