import * as React from "react";

import { withStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  text: string;
  classes: {
    [key: string]: any;
  };
  to?: string;
}

const styles = {
  button: {
    height: "8vh",
    width: "100%",
    borderRadius: 0,
    color: "#690f2a",
    fontSize: 14,
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#690f2a",
      color: "#c6ccd7"
    }
  },
  link: {
    textDecoration: "none"
  }
};

function AppBarButton({ classes, text, to }: IProps) {
  if (to) {
    return (
      <Link to={to} className={classes.link}>
        <Button className={classes.button}>{text}</Button>
      </Link>
    );
  }
  return <Button className={classes.button}>{text}</Button>;
}

export default withStyles(styles)(AppBarButton);
