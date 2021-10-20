import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Progress from "../components/Progress/Progress";
import Module from "./Module";
function Topicwise({ moduleName, collectionName, index }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Progress collectionName={collectionName} moduleName={moduleName} />
      <Module moduleName={moduleName} index={index} />
    </div>
  );
}

export default Topicwise;
