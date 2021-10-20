import React from "react";
import { Questionname } from "./style.question";
function Question({ name, link }) {
  const question = String(name).toLowerCase();
  return (
    <Questionname>
      <a href={link} target="_blank" rel="noreferrer">
        {question}
      </a>
    </Questionname>
  );
}

export default Question;
