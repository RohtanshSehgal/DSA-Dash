import { useEffect, useState } from "react";
import axios from "axios";
import { communication } from "../services/communication";

function useChallenge() {
  const [check, setCheck] = useState(false);
  const [question, setQuestion] = useState({});
  function getRandom() {
    axios.get(communication.challenge).then((resp) => {
      setQuestion(
        resp.data.questions[
          Math.floor(Math.random() * (resp.data.totalQues - 0)) + 0
        ]
      );
      setCheck(true);
    });
  }
  useEffect(() => {
    getRandom();
  }, []);
  return { getRandom, data: { response: check, questions: question } };
}

export default useChallenge;
