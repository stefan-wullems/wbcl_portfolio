import * as React from "react";

import { withStyles } from "@material-ui/core";

const styles = {
  container: {
    width: "100%",
    height: "33.33vh"
  }
};

function MiddleBar({ classes }) {
  return <div className={classes.container} style={{ background: "#333" }} />;
}

export default withStyles(styles)(MiddleBar);
