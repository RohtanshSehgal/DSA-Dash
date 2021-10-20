import React, { useEffect, useState, useRef } from "react";
import Progress from "../components/Progress/Progress";
import {
  Checkbox,
  Container,
  Heading,
  QuestionContainer,
} from "./styles.views";
import { useParams, useHistory } from "react-router-dom";
import { data } from "../services/data";
import Question from "../components/Question/Question";
import { checkDB, getData, updateData } from "../services/database";

function Topic({ collectionName, outerindex }) {
  let { id, topic } = useParams();
  let history = useHistory();
  const [obj, setobj] = useState({});
  const [questions, setQues] = useState([]);
  const isMounted = useRef(true);
  //onclick

  function crudClick(index) {
    const newArr = questions.map((question, i) => {
      if (i === index) {
        question.done = true;
      } else {
        return question;
      }
      return question;
    });
    setQues(newArr);
    let newData = obj;
    newData.completed = newData.completed + 1;
    newData.started = true;

    if (newData.total - newData.completed === 0) {
      newData.completedTopic = true;
      updateData("modulequescompleted", collectionName, {
        completed: obj.total,
      });
    } else {
      newData.completedTopic = false;
    }
    newData.questions[index].done = true;
    updateData(collectionName, topic, newData);

    console.log(newArr, newData);

    setobj(newData);
  }

  useEffect(() => {
    checkDB(collectionName).then((resp) => {
      getData(collectionName, topic)
        .then((resp) => {
          setobj(resp);
          setQues(resp.questions);
        })
        .catch((rej) => {
          history.push("/");
        });
    });

    return () => {
      isMounted.current = false;
    };
  }, [collectionName, topic, history]);

  return (
    <>
      <Progress moduleName={topic} collectionName={collectionName} />
      <Container>
        <Heading>
          {data.modules[outerindex].topics[id].topicname.toLowerCase()}
        </Heading>
        {questions?.length !== 0
          ? questions.map((question, index) => {
              if (question.done === false) {
                return (
                  <QuestionContainer color={data.colors[0]} key={question.name}>
                    <Question name={question.name} link={question.link} />
                    <span
                      onClick={() => {
                        crudClick(index);
                      }}
                    >
                      <Checkbox></Checkbox>
                    </span>
                  </QuestionContainer>
                );
              } else {
                return void 0;
              }
            })
          : ""}
        {questions?.length !== 0
          ? questions.map((question, index) => {
              if (question.done) {
                return (
                  <QuestionContainer color={data.colors[1]} key={question.name}>
                    <Question name={question.name} link={question.link} />
                    <span
                      onClick={() => {
                        alert("ALready Done");
                      }}
                    >
                      <Checkbox disabled={true} color="white"></Checkbox>
                    </span>
                  </QuestionContainer>
                );
              } else {
                return void 0;
              }
            })
          : ""}
      </Container>
    </>
  );
}

export default Topic;
