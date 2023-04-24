import React from 'react';
import {Outlet} from "react-router-dom";
import * as Styled from './index.styles'


const App = () => {
  return (
    <div>
      <Styled.GlobalStyle/>
      <Outlet/>
    </div>
  );
};

export default App;