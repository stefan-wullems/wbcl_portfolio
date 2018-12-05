import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";
import ProjectContainer from "./ProjectContainer";

class ExperienceContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="experience" />
        <div
          style={{
            background: "#565867",
            height: "92vh",
            width: "100vw",
            paddingTop: "5vh",
            paddingLeft: "10vw",
            paddingRight: "10vw"
          }}
        >
          <ProjectContainer name="you're bluffing" />
        </div>
      </React.Fragment>
    );
  }
}

export default ExperienceContainer;
