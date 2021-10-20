import React from "react";
import { Div } from "./style.card";
function Card({ module, questions, Logo, color, Background }) {
  return (
    <Div color={color} style={{ backgroundImage: `url(${Background})` }}>
      <p>{module}</p>
      <h4>{questions}</h4>
      <Logo />
    </Div>
  );
}

export default Card;
