import React from "react";
import { Link } from "react-router-dom";
//hooks
import useInitialize from "../hooks/useInitialize";
//components
import Card from "../components/Cards/Card";
import Floatbutton from "../components/FloatingButton/Floatbutton";
//services
import { data } from "../services/data";
import { communication } from "../services/communication";
//assets
import { ReactComponent as topicwise } from "../assets/topicwise.svg";
import topicwisebg from "../assets/topicwisebg.svg";
import { ReactComponent as companywise } from "../assets/companywise.svg";
import companywisebg from "../assets/companywisebg.svg";
import { ReactComponent as challenge } from "../assets/challenge.svg";
import challengebg from "../assets/challengebg.svg";
//styles
import { Section, Heading, Container } from "./styles.views";
function Home() {
  const initializeTopicwise = useInitialize(
    "topicwise",
    communication.topicwise,
    false
  );
  const initializeCompanywise = useInitialize(
    "companywise",
    communication.companywise,
    false
  );

  return (
    <Container>
      <Heading>{data.title}</Heading>
      <Section>
        <Link to="/topicwise" style={{ textDecoration: "none" }}>
          <Card
            module={data.modules[0].moduleName}
            color={data.modules[0].colorCode}
            questions={data.modules[0].questionCount}
            Logo={topicwise}
            Background={topicwisebg}
          />
        </Link>
        <Link to="/companywise" style={{ textDecoration: "none" }}>
          <Card
            module={data.modules[1].moduleName}
            color={data.modules[1].colorCode}
            questions={data.modules[1].questionCount}
            Logo={companywise}
            Background={companywisebg}
          />
        </Link>
        <Link to="/challenge" style={{ textDecoration: "none" }}>
          <Card
            module={data.modules[2].moduleName}
            color={data.modules[2].colorCode}
            questions={data.modules[2].questionCount}
            Logo={challenge}
            Background={challengebg}
          />
        </Link>
      </Section>
      <Floatbutton />
    </Container>
  );
}

export default Home;
