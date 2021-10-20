import axios from "axios";
import { useState, useEffect } from "react";
import { setData, checkDB, setSingleData } from "../services/database";

function useInitialize(collectionName, url, defaultvalue) {
  const [check, setCheck] = useState(defaultvalue);
  function initialize(collectionName, url) {
    try {
      checkDB(collectionName)
        .then((resp) => {
          setCheck(true);
        })
        .catch((rej) => {
          axios
            .get(url)
            .then((resp) => resp.data)
            .then((data) => {
              setData(collectionName, data.problems);
              setCheck(true);
              return [data.totalcompletedQuestions, data.totalQuestions];
            })
            .then(([compQues, totalQues]) => {
              setSingleData("modulequescompleted", collectionName, {
                completed: compQues,
                total: totalQues,
              });
            });
        });
    } catch (error) {
      setCheck(false);
    }
  }
  useEffect(() => {
    initialize(collectionName, url);
  }, [collectionName, url]);
  return check;
}

export default useInitialize;
