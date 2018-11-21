import * as React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  image: {
    width: "100vw",
    height: "100vh"
  }
};

interface IProps {
  image: string;
  classes: {
    [key: string]: any;
  };
}

function LandingImage({ image, classes }: IProps) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={classes.image}
    />
  );
}

export default withStyles(styles)(LandingImage);
