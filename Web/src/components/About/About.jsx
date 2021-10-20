import React from "react";
import { data } from "../../services/data";
import { Container, Desc } from "../../views/styles.views";
import { ReactComponent as Github } from "../../assets/github.svg";
import { Flex } from "./style.about";

function About() {
  return (
    <Container>
      <Desc>{data.about[0].description}</Desc>
      <Flex>
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </Flex>
    </Container>
  );
}

export default About;
