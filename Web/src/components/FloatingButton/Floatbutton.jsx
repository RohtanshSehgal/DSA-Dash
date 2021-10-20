import React from "react";
import { Link } from "react-router-dom";
import { FloatingButton } from "./style.floatbutton";
import { ReactComponent as Navigate } from "../../assets/navigate.svg";

function Floatbutton() {
  return (
    <Link to="/about">
      <FloatingButton>
        <Navigate />
      </FloatingButton>
    </Link>
  );
}

export default Floatbutton;
