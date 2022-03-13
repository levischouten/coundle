import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 1em 3em;
  display: block;
  text-align: center;
`;

const Title = styled.h1``;

const Header = () => {
  return (
    <Wrapper>
      <Title>Coundle</Title>
    </Wrapper>
  );
};

export default Header;
