import * as React from "react";
import { Grid } from "@material-ui/core";

interface IProps {
  name: string;
}

class ProjectContainer extends React.Component<IProps> {
  render() {
    return (
      <div
        style={{
          background: "#24292e",
          width: "80vw",
          height: "50vh",
          borderRadius: 10
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "raleway",
            fontSize: 40,
            fontWeight: 700,
            color: "#ffffff",
            paddingTop: "2vh"
          }}
        >
          {this.props.name}
        </h1>
        <Grid container>
          <Grid item xs={12} md={6} />
        </Grid>
      </div>
    );
  }
}

export default ProjectContainer;
