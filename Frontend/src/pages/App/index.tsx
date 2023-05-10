import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "./index.styles";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "_reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const App = () => {
  const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, ReduxThunk))
  );
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Styled.GlobalStyle />
        <Outlet />
      </Suspense>
    </Provider>
  );
};

export default App;
