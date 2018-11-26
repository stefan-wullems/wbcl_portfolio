import * as React from "react";

import { withStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  button: {
    width: "20vw",
    marginLeft: "40vw",
    marginRight: "40vw",
    height: "6.25vh",
    backgroundColor: "none",
    fontWeight: 700,
    borderStyle: "solid",
    borderColor: "#690f2a",
    borderWidth: 0.5,
    borderRadius: 30,
    color: "#690f2a",
    "&:hover": {
      backgroundColor: "#690f2a",
      color: "#d7dde8",
      borderColor: "#d7dde8"
    }
  },
  link: {
    textDecoration: "none"
  }
};

interface IProps {
  style: {
    marginTop: string;
    fontSize: number;
  };
  text: string;
  classes: {
    [key: string]: any;
  };
  url: string;
}

function LandingImageButton({ classes, text, style, url }: IProps) {
  return (
    <Link to={url} className={classes.link}>
      <Button className={classes.button} style={style}>
        {text}
      </Button>
    </Link>
  );
}

export default withStyles(styles)(LandingImageButton);
