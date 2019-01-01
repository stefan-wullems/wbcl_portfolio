import * as React from "react";

import AppBarContainer from "../AppBar/AppBarContainer";
import { RouteComponentProps } from "react-router";
import ContactForm from "./ContactForm";

interface IState {
  message: string;
  name: string;
  email: string;
  companyName: string;
}

export type ContactFormFields = "message" | "name" | "email" | "companyName";

class ContactContainer extends React.Component<RouteComponentProps, IState> {
  readonly state: IState = {
    message: "",
    name: "",
    email: "",
    companyName: ""
  };

  handleContactFormChange(field: ContactFormFields, value: string): void {
    const copy = { ...this.state };
    copy[field] = value;
    this.setState(copy);
  }

  handleContactFormSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <AppBarContainer page="contact" />
        <ContactForm
          {...this.state}
          onChange={this.handleContactFormChange.bind(this)}
          onSubmit={this.handleContactFormSubmit.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default ContactContainer;
