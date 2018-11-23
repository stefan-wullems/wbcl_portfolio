import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import Background from "./Screenshot-from-2018-11-23-13-44-29.png";
import NavBarContainer from "../AppBar/AppBarContainer";
import LandingImageButton from "./LandingImageButton";

class LandingImageContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "100vw 100vh",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          margin: 0
        }}
      >
        <NavBarContainer />

        <LandingImageButton marginTop="28.125vh" text="about me" />
        <LandingImageButton marginTop="6.25vh" text="my work" />
        <LandingImageButton marginTop="6.25vh" text="contact" />
      </div>
    );
  }
}

export default LandingImageContainer;
