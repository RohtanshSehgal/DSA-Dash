import React from "react";
import Progress from "../components/Progress/Progress";
import Module from "./Module";

function Companywise({ moduleName, collectionName, index }) {
  return (
    <div>
      <Progress collectionName={collectionName} moduleName={moduleName} />
      <Module moduleName={moduleName} index={index} />
    </div>
  );
}

export default Companywise;
