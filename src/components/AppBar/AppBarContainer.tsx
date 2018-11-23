import * as React from "react";
import { Grid } from "@material-ui/core";

class NavBarContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "12.5vh"
        }}
      >
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <h1
              style={{
                marginTop: "12.5vh",
                height: "12.5vh",
                lineHeight: "12.5vh",
                textAlign: "center",
                fontFamily: "raleway",
                fontSize: "80px",
                color: "#690f2a"
              }}
            >
              Stefan Wullems
            </h1>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </div>
    );
  }
}

export default NavBarContainer;
