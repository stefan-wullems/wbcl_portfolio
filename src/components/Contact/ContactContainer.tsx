import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";
import { RouteComponentProps } from "react-router";
import ContactForm from "./ContactForm";

class ContactContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="contact" />
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default ContactContainer;
