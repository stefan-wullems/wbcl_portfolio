import * as React from "react";
import { ContactFormFields } from "./ContactContainer";
import ContactField from "./ContactField";
interface IProps {
  onChange: (field: ContactFormFields, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  message: string;
  name: string;
  email: string;
  companyName: string;
}

const ContactForm: React.FC<IProps> = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <ContactField
        label="Name: "
        onChange={props.onChange}
        value={props.name}
        field="name"
      />
      <ContactField
        label="Email: "
        onChange={props.onChange}
        value={props.email}
        field="email"
      />
      <ContactField
        label="Company Name: "
        onChange={props.onChange}
        value={props.companyName}
        field="companyName"
      />
      <label>
        Message:
        <textarea
          rows={4}
          cols={50}
          onChange={e => props.onChange("message", e.target.value)}
          value={props.message}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default ContactForm;
