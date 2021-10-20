import React from "react";
import { data } from "../../services/data";
import { Container, Desc } from "../../views/styles.views";
import { Flex, NameTile } from "./style.about";
function Credits() {
  return (
    <Container>
      <Desc>{data.about[1].description}</Desc>
      <Flex>
        <NameTile>love babbar</NameTile>
        <NameTile>afteracademy</NameTile>
        <NameTile>geekforgeeks</NameTile>
        <NameTile>leetcode</NameTile>
      </Flex>
    </Container>
  );
}

export default Credits;
