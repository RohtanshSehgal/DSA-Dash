import React, { useState, useEffect } from "react";
import { Div } from "./style.tile";
import { data } from "../../services/data";
import { getData } from "../../services/database";

function Tile({ collectionName, topicname, questions }) {
  const topic = topicname.replace(/ /g, "").toLowerCase();
  const [color, setColor] = useState(data.colors[0]);
  useEffect(() => {
    getData(collectionName, topic).then((resp) => {
      if (resp?.completedTopic || resp?.completed - resp?.total === 0) {
        setColor(data.colors[1]);
      } else if (resp?.started) {
        setColor(data.colors[2]);
      } else {
        setColor(data.colors[0]);
      }
    });
  }, [collectionName, topic]);
  return (
    <Div color={color}>
      <h2>{topicname}</h2>
      <p>{questions} Questions</p>
    </Div>
  );
}

export default Tile;
