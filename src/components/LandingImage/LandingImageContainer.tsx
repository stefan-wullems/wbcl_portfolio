import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import Background from "./Screenshot-from-2018-11-23-11-52-04.png";
import NavBarContainer from "../AppBar/AppBarContainer";
import LandingImageButton from "./LandingImageButton";

class LandingImageContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          objectFit: "fill",
          height: "100vh",
          width: "100vw",
          margin: 0
        }}
      >
        <NavBarContainer />

        <LandingImageButton marginTop="14vh" text="about me" />
        <LandingImageButton marginTop="6vh" text="my work" />
        <LandingImageButton marginTop="6vh" text="contact" />
      </div>
    );
  }
}

export default LandingImageContainer;
