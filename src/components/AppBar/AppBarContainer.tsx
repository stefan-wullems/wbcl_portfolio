import * as React from "react";
import { Grid } from "@material-ui/core";
import AppBarButton from "./AppBarButton";

interface IProps {
  page: Page;
}

class AppBarContainer extends React.Component<IProps> {
  render() {
    return (
      <Grid
        container
        style={{
          width: "100vw",
          height: "8vh",
          backgroundColor: "#c6ccd7"
        }}
      >
        <Grid item xs={1}>
          <AppBarButton text={"home"} to="/" />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={6}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "raleway",
              fontSize: 30,
              fontWeight: 700,
              color: "#690f2a"
            }}
          >
            {this.props.page}
          </h1>
        </Grid>
        {["about", "experience", "contact"].map(page => {
          return (
            <Grid item xs={1} key={page}>
              {this.props.page === `${page}` && (
                <AppBarButton text={`${page}`} />
              )}
              {this.props.page !== `${page}` && (
                <AppBarButton text={`${page}`} to={`/${page}`} />
              )}
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default AppBarContainer;
