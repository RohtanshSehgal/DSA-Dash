import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./styles.views";
import Credits from "../components/About/Credits";
import About from "../components/About/About";
const Tab = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");
  font-family: "Major Mono Display", monospace;
  font-size: 20px;
  padding: 10px 50px;
  cursor: pointer;
  color: white;
  transform: 0.2;
  background: transparent;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    color: #7F65F8;
    // border-bottom: 2px solid #7F65F8;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["About", "Credits"];
export default function Settings() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Container>
        <ButtonGroup>
          {types.map((type, index) => (
            <Tab
              key={type}
              active={active === index}
              onClick={() => setActive(index)}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
        <p />
        {active === 1 ? <Credits /> : <About />}
      </Container>
    </>
  );
}
