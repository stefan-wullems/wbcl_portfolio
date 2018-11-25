import * as React from "react";

import { withStyles, Button } from "@material-ui/core";

const styles = {
  button: {
    width: "12vw",
    marginLeft: "44vw",
    marginRight: "44vw",
    height: "6.25vh",
    backgroundColor: "none",
    color: "#690f2a",
    fontSize: "16px",
    fontWeight: 700,
    borderStyle: "solid",
    borderColor: "#690f2a",
    borderWidth: 0.5,
    borderRadius: 30,
    "&:hover": {
      backgroundColor: "#690f2a",
      color: "#d7dde8",
      borderColor: "#d7dde8"
    }
  }
};

function LandingImageButton({ classes, marginTop, text }) {
  return (
    <Button className={classes.button} style={{ marginTop }}>
      {text}
    </Button>
  );
}

export default withStyles(styles)(LandingImageButton);
