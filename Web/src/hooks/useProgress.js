import { useEffect, useState } from "react";
import { checkDB, getData } from "../services/database";
import { useHistory } from "react-router";
function useProgress(collectionName, key) {
  const history = useHistory();
  const [percentage, setPercentage] = useState("100%");
  useEffect(() => {
    checkDB(collectionName)
      .then((resp) => {
        getData(collectionName, key)
          .then((resp) => {
            return [resp.completed, resp.total];
          })
          .then(([completed, total]) => {
            setPercentage(`${((completed / total) * 100).toString()}%`);
          });
      })
      .catch((rej) => {
        history.push("/");
      });
  }, [collectionName, key, history]);
  return percentage;
}

export default useProgress;
