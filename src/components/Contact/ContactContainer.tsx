import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";
import { RouteComponentProps } from "react-router";

interface IState {
  message: string;
}

class ContactContainer extends React.Component<RouteComponentProps, IState> {
  readonly state: IState = {
    message: ""
  };

  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="contact" />
        <textarea rows={4} cols={50} />
      </React.Fragment>
    );
  }
}

export default ContactContainer;
