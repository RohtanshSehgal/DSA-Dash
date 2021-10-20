import React from "react";
import { Icon } from "./style.logo";
import { ReactComponent as Dsadash } from "../../assets/dsadash.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Icon>
      <Link to="/">
        <Dsadash />
      </Link>
    </Icon>
  );
}

export default Logo;
