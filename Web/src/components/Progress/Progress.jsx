import React from "react";
import { Div, Bar } from "./style.progress";
import useProgress from "../../hooks/useProgress";
import { data } from "../../services/data";
function Progress({ collectionName, moduleName }) {
  const percentage = useProgress(collectionName, moduleName);
  return (
    <Div>
      <Bar
        width={percentage}
        color={percentage === "100%" ? data.colors[1] : data.colors[0]}
      ></Bar>
    </Div>
  );
}

export default Progress;
