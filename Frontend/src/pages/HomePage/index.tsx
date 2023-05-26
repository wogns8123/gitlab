import React, { useEffect } from "react";
import * as Styled from "./index.styles";
import Sidebar from "./components/Sidebar";
import GPTfunction from "./components/GPTfunction";

const HomePage = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let accessToken = searchParams.get("access_token");
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  }, []);

  return (
    <Styled.BodyContainer>
      <Sidebar />
      <GPTfunction />
    </Styled.BodyContainer>
  );
};

export default HomePage;
