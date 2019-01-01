import * as React from "react";
import HomeContainer from "./components/Home/HomeContainer";
import { Route } from "react-router-dom";

import AboutContainer from "./components/About/AboutContainer";
import ExperienceContainer from "./components/Experience/ExperienceContainer";
import ContactContainer from "./components/Contact/ContactContainer";

class App extends React.Component {
  public render() {
    return (
      <div className="App" style={{ padding: 0, margin: 0 }}>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/experience" component={ExperienceContainer} />
        <Route path="/contact" component={ContactContainer} />
      </div>
    );
  }
}

export default App;
