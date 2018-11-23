import * as React from "react";

import { withStyles } from "@material-ui/core";

const styles = {
  container: {
    width: "100%",
    height: "92vh"
  }
};

function MiddleBar({ classes }) {
  return (
    <div
      className={classes.container}
      style={{ background: "#fff", boxShadow: "5 10 #888888" }}
    />
  );
}

export default withStyles(styles)(MiddleBar);
