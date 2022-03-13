import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Main></Main>
    </Wrapper>
  );
};

export default App;
