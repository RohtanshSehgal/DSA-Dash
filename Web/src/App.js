import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Home from "./views/Home";
import Logo from "./components/Logo/Logo";
import Topicwise from "./views/Topicwise";
import Topic from "./views/Topic";
import Companywise from "./views/Companywise";
import Challenge from "./views/Challenge";
import Settings from "./views/Settings";

function App() {
  useEffect(() => {
    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Router>
      <Logo />
      <Switch>
        {/* Home route */}
        <Route path="/" exact component={Home} />

        {/* Topicwise routes */}
        <Route path="/topicwise" exact>
          <Topicwise
            collectionName="modulequescompleted"
            moduleName="topicwise"
            index={0}
          />
        </Route>
        <Route exact path="/topicwise/:id/:topic">
          <Topic collectionName="topicwise" outerindex={0} />
        </Route>

        {/* Companywise Routes */}
        <Route exact path="/companywise">
          <Companywise
            collectionName="modulequescompleted"
            moduleName="companywise"
            index={1}
          />
        </Route>
        <Route exact path="/companywise/:id/:topic">
          <Topic collectionName="companywise" outerindex={1} />
        </Route>
        {/* Challenges Route */}
        <Route exact path="/challenge">
          <Challenge />
        </Route>
        {/* About App */}
        <Route exact path="/about">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
