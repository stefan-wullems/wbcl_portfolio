import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";
import { RouteComponentProps } from "react-router";
import ContactForm from "./ContactForm";

import { Route } from "react-router-dom";
import SuccessfullySentMessagePage from "./SuccessfullySentMessagePage";

class ContactContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="contact" />
        <Route exact path="/contact" component={ContactForm} />
        <Route
          path="/contact/successful"
          component={SuccessfullySentMessagePage}
        />
      </React.Fragment>
    );
  }
}

export default ContactContainer;
