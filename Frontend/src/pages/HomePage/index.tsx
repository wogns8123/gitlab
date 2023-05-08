import React, {useEffect} from "react";
import * as Styled from "./index.styles";
import Sidebar from "./components/Sidebar";
import GPTfunction from "./components/GPTfunction";

const HomePage = () => {

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    let access_token = searchParams.get("access_token");
    if (access_token) {
      localStorage.setItem('access_token',access_token)
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
