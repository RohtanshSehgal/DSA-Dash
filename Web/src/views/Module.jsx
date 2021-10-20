import React, { useState } from "react";
import Tile from "../components/Tile/Tile";
import { Container, Desc, ContentContainer, Heading } from "./styles.views";
import { data } from "../services/data";
import { Link } from "react-router-dom";

function Module({ moduleName, index }) {
  const [topics, setTopics] = useState(data.modules[index].topics);
  return (
    <Container>
      <Heading>
        <strong>{data.modules[index].moduleName + " questions"}</strong>
      </Heading>
      <Desc>{data.modules[index].shortDesc}</Desc>
      <ContentContainer>
        {topics.length !== 0
          ? topics.map((topic, index) => {
              return (
                <Link
                  to={`${moduleName}/${index}/${topic.topicname
                    .replace(/ /g, "")
                    .toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                  key={topic.topicname}
                >
                  <Tile
                    topicname={topic.topicname}
                    questions={topic.totalQues}
                    collectionName={moduleName}
                  />
                </Link>
              );
            })
          : ""}
      </ContentContainer>
    </Container>
  );
}

export default Module;
