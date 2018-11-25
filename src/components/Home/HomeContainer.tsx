import * as React from "react";
import Background from "./Screenshot-from-2018-11-23-13-44-29.png";
import NavBarContainer from "../AppBar/AppBarContainer";
import HomeNavButton from "./HomeNavButton";

class HomeContainer extends React.Component {
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

        <HomeNavButton marginTop="28.125vh" text="about me" />
        <HomeNavButton marginTop="6.25vh" text="my work" />
        <HomeNavButton marginTop="6.25vh" text="contact" />
      </div>
    );
  }
}

export default HomeContainer;
