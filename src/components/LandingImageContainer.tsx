import * as React from "react";

import LandingImage from "./LandingImage";
import coolWallpaper from "../images/coolWallpaper.jpg";

class LandingImageContainer extends React.Component {
  render() {
    return (
      <div>
        <LandingImage image={coolWallpaper} />
      </div>
    );
  }
}

export default LandingImageContainer;
