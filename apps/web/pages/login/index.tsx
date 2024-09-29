import React from "react";
import styled from "styled-components";

const Index = () => {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  // Create a Wrapper component that'll render a <section> tag swith some styless
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  const Button = styled.button<{ $primary?: boolean }>`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
    cursor: pointer;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
    </Wrapper>
  );
};

export default Index;
