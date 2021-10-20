import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { data } from "../services/data";
import { Div, Bar } from "../components/Progress/style.progress";
import {
  Button,
  Container,
  Desc,
  Heading,
  QuestionContainer,
} from "./styles.views";
import Question from "../components/Question/Question";
import { ReactComponent as Popout } from "../assets/popout.svg";
import useChallenge from "../hooks/useChallenge";

function Challenge() {
  let challenge = useChallenge();
  const currentQuestion = challenge.data;
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Div>
        <Bar width="100%" color={data.colors[2]}></Bar>
      </Div>
      <Container>
        <Heading>
          <strong>{data.modules[2].moduleName + " Mode"}</strong>
        </Heading>
        <Desc>{data.modules[2].shortDesc}</Desc>
        {}
        <QuestionContainer color={data.colors[2]}>
          {currentQuestion.response ? (
            <>
              <Question
                name={currentQuestion.questions?.name}
                link={currentQuestion.questions?.link}
              />
              <a
                href={currentQuestion.questions?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Popout />
              </a>
            </>
          ) : (
            <h4>Loading Your Question!</h4>
          )}
        </QuestionContainer>
        <Button onClick={challenge.getRandom} color={data.colors[1]}>
          Done
        </Button>
      </Container>
    </>
  );
}

export default Challenge;
