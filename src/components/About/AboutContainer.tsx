import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";

class AboutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="about" />
      </React.Fragment>
    );
  }
}

export default AboutContainer;
